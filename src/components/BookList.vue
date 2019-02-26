<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    name: 'BookList',
    data() {
        return {
            title: 'All Books'
        }
    }
}
</script>

<style>
    h1, h2 {
        font-weight: normal
    }
</style>
