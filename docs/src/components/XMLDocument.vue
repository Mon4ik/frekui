<script lang="ts">
import {ref} from 'vue'
import {useRoute} from 'vue-router'

import hljs from "highlight.js"
import 'highlight.js/styles/github.css';

type TreeElement = {
    element: "p"
    content: string
} | {
    element: "title"
    level: number
    content: string
} | {
    element: "alert"
    type: string
    content: string
} | {
    element: "snippet"
    language: string
    preview: boolean
    content: string
}

function trim(text: string) {
    return text
        .split("\n")
        .map((l: string) => l.trim())
        .join("\n").trim()
}

async function loadDocument(file: string): Promise<{ tree: Record<string, any>[], title: string }> {
    const xml_content = await fetch(`/docsFiles/${file}.xml`).then((res) => res.text())

    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xml_content, "text/xml")

    const doc = xmlDoc.querySelector("document")!
    const tree: TreeElement[] = []

    for (const element of Array.from(doc.children)) {
        console.log(element)
        switch (element.nodeName.toLowerCase()) {
            case "p":
                tree.push({
                    element: "p",
                    content: trim(element.textContent!)
                })

                break;

            case "title": {
                tree.push({
                    element: "title",
                    level: parseInt(element.getAttribute("level") ?? "2"),
                    content: trim(element.textContent!)
                })

                break
            }

            case "alert": {
                tree.push({
                    element: "alert",
                    type: element.getAttribute("type") ?? "info",
                    content: trim(element.textContent!)
                })

                break
            }

            case "snippet": {
                const language = element.getAttribute("language") ?? "plaintext"
                const preview = element.getAttribute("preview") === "on"

                tree.push({
                    element: "snippet",
                    language,
                    preview,
                    content: trim(element.innerHTML)
                })

                break
            }
        }
    }

    console.info("XML successfully parsed!")

    return {
        title: doc!.getAttribute("title") ?? "Document",
        tree
    }
}

export default {
    name: "XMLDocument",
    computed: {
        hljs() {
            return hljs
        }
    },
    methods: {
        copyToClipboard(text: string) {
            navigator.clipboard.writeText(text)
        },
        loadSnippetFile(file: string) {
            console.log("tryna load")
            return fetch(`/docsSnippets/${file}.html`)
                .then((res) => res.text())
        }
    },
    setup() {
        const doc = ref<{ tree: Record<string, any>[], title: string }>({tree: [], title: ""})
        // const router = useRouter()
        const route = useRoute();


        loadDocument(route.params.file as string)
            .then((doc_) => doc.value = doc_)

        return {
            doc
        }
    }
}
</script>

<template>
    <h1>{{ doc.title }}</h1>
    <main v-for="element in doc.tree" :key="element.content">
        <h1 v-if="element.element === 'title' && element.level === 1">{{ element.content }}</h1>
        <h2 v-if="element.element === 'title' && element.level === 2">{{ element.content }}</h2>
        <h3 v-if="element.element === 'title' && element.level === 3">{{ element.content }}</h3>
        <h4 v-if="element.element === 'title' && element.level === 4">{{ element.content }}</h4>
        <h5 v-if="element.element === 'title' && element.level === 5">{{ element.content }}</h5>
        <h6 v-if="element.element === 'title' && element.level === 6">{{ element.content }}</h6>

        <p v-if="element.element === 'p'">{{ element.content }}</p>

        <div v-if="element.element === 'alert'" :class="{alert: true, [`alert-${element.type}`]: true }">
            {{ element.content }}
        </div>

        <div v-if="element.element === 'snippet'">
            <div class="box w-full relative">
                    <span class='whitespace-pre-wrap block w-full font-mono resize-none'
                          v-html="hljs.highlight(element.content, {language: element.language}).value"
                    />

                <div class="bg-neutral-100 box mt-5"
                     v-if="element.preview && element.file"
                     v-html="loadSnippetFile(element.file)"
                />

                <div class="bg-neutral-100 box mt-5"
                     v-else-if="element.preview"
                     v-html="element.content"
                />

                <button class="absolute top-0 right-0 m-2 btn btn-none" @click="copyToClipboard(element.content)">Copy
                </button>
            </div>
        </div>

    </main>
</template>

<style scoped>
</style>