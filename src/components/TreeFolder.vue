<template>
    <p>
        <span>{{folder.name}}</span>
        <tree-folder-contents :children="folder.children"/>
    </p>
</template>

<script>
export default {
    props:['folder']
}
</script>

