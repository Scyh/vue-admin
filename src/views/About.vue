<template>
  <div class="about">
    <icon-svg :name="'home'" />
    <icon-svg :name="'about'" />
    <p>
        {{ route }}
    </p>

  </div>
</template>
<script>
export default {
    computed: {
        route() {
            return this.$route.path;
        }
    }
}
</script>
