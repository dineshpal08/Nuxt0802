<template>
  <v-footer absolute dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="blue">
        <div class="d-flex flex-row small">
          <p class="text-md px-6">About us</p>
          <p class="text-md px-6">Privacy Policy</p>
          <p class="text-md px-6">Terms of Use</p>
          <p class="text-md px-6">Contact Us</p>
        </div>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-linkedin", "mdi-facebook", "mdi-youtube"],
  }),
};
</script>
