<script lang="ts">
import XMLDocument from "@/components/XMLDocument.vue";

export default {
    components: {XMLDocument},
    // setup() {
    // }
}


// for (const docElement of xmlDoc.tree) {
//     let el
//     if (docElement.element === "subtitle") {
//         el = document.createElement("h2")
//         el.innerText = docElement.content
//     } else if (docElement.element === "snippet") {
//         el = document.createElement("div")
//         el.innerHTML = [
//             "<span class='box whitespace-pre-wrap block w-full resize-none'></span>",
//             "<div class='box w-full p-5'>",
//             `${docElement.content}`,
//             "</div>"
//         ].join("\n")
//
//         el.querySelector("span")!.innerHTML = hljs.highlight(docElement.content, {language: "html"}).value
//
//     } else if (docElement.element === "alert") {
//         el = document.createElement("div")
//         el.className = `alert alert-${docElement.type}`
//     } else /* if (docElement.element === "p") */ {
//         el = document.createElement("p")
//         el.innerText = docElement.content
//     }
//
//     document.querySelector("main")!.appendChild(el)
// }
// const el = document.createElement(element.element)
</script>

<template>
    <div></div>
    <div>
        <XMLDocument />
    </div>
</template>

<style scoped>
</style>