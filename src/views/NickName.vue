<template lang="html">
    <div
        class="nickname"
    >
        <label for="nick">Nickname:</label>
        <input
            autofocus
            type="text"
            name="nick"
            :value="nick"
            @input="alteraNick()"
        >
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    .nickname {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        font-size: 50px;
    }
    .nickname input {
        background-color: transparent;
        height: 50px;
        font-size: 30px;
        color: var(--cor-texto);
        border-color: transparent;
        border-bottom-color: var(--cor-texto);
    }
    .nickname input:focus {
        outline: none;
    }
</style>
