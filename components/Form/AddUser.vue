<template>
  <div>
    <div class="main">
      <div class="head">
        <div class="svgdiv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            class="svg1"
          >
            <g fill="none">
              <circle cx="10" cy="8" r="5" fill="currentColor" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M19 10v6m3-3h-6"
              />
              <path
                fill="currentColor"
                d="M17.142 20.383c.462-.105.739-.585.534-1.012c-.552-1.15-1.459-2.162-2.634-2.924C13.595 15.509 11.823 15 10 15s-3.595.508-5.042 1.447c-1.175.762-2.082 1.773-2.634 2.924c-.205.427.072.907.534 1.012a32.333 32.333 0 0 0 14.284 0"
              />
            </g>
          </svg>
        </div>
        <div class="top">
          <h1>Add Users</h1>
          <p>
            Define Users as Buyers, Sellers, Billers & Viewers to manage your
            company account on this website
          </p>
        </div>
        <br />
        <hr />
      </div>
      <hr />
      <div class="flex justify-center items-center flex-column h50 gap-2 mt-16">
        <hr />
        <div class="">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k w-10 h-10 textcolor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="PeopleAltIcon"
            tabindex="-1"
            fill="currentColor"
            title="PeopleAlt"
          >
            <path
              fill-rule="evenodd"
              d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
            ></path>
            <circle cx="9" cy="8" r="4" fill-rule="evenodd"></circle>
            <path
              fill-rule="evenodd"
              d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
            ></path>
          </svg>
        </div>
        <div class="flex justify-center items-center flex-column mt-2">
          <h2><b class="text-lg">No Users Added yet</b></h2>
          <p>Start by Adding your first User</p>
        </div>
        <div class="mt-3">
          <v-btn color="primary" outlined @click="dialogToggle = true"
            >+ Add New User</v-btn
          >
        </div>
      </div>
    </div>
    <v-dialog max-width="900px" v-model="dialogToggle">
      <FormDialogBox />
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogToggle: false,
    };
  },
};
</script>

<style scoped>
.dialog {
  height: 500px;
  width: 600px;
}
.head {
  display: flex;
}
.svg1 {
  height: 40px;
  width: 40px;
  color: #1976d2;
}
.svgdiv {
  padding: 10px 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.top {
  margin-top: 10px;
}
.main {
  width: 70%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 250px;
  height: 500px;
  box-shadow: 1px 5px 5px rgb(118, 117, 117);
}
h1 {
  color: #1976d2;
}
</style>
