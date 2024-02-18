<template>
  <v-card>
    <v-form ref="form">
      <div class="main shadow-lg mx-auto pb-10 z-50 bgffff rounded-lg">
        <div class="flex gap-7 items-center csss">
          <div class=" ">
            <h2 class="color text-lg">Add User</h2>
          </div>
        </div>
        <br />
        <hr />
        <div class="forms mt-10">
          <div class="grid grid-cols-2 gap-12 lg:px-10 w-full">
            <div class="flex gap-5 items-center">
              <div class="w-5/12 text-right">
                <label class="text-sm mb-2" for="">Name </label>
                <label class="text-red-500 text-xs">*</label>
              </div>
              <div class="w-7/12">
                <!-- <input
              class="inputstyle"
              placeholder="Enter the User Name"
              v-model="formData.name"
              :class="{
                'border-red-500': !validateName(),
                'border-green-500': validateName(),
              }"
            /> -->
                <v-text-field
                  class="inputstyle"
                  placeholder="Enter the User Name"
                  :rules="[rules.required]"
                  outlined
                  color="success"
                  dense
                  v-model="formData.name"
                ></v-text-field>
              </div>
            </div>
            <div class="flex gap-5 items-center">
              <div class="w-4/12 text-right">
                <label class="text-sm mb-2" for="">Mobile No. </label>
                <label class="text-red-500 text-xs">*</label>
              </div>
              <div class="w-8/12 items-center gap-1">
                <v-text-field
                  class="inputstyle"
                  placeholder="Enter the Mobile No."
                  :rules="[rules.mobile]"
                  outlined
                  color="success"
                  dense
                  v-model="formData.mobileNo"
                ></v-text-field>
              </div>
            </div>
            <div class="flex gap-5 items-center">
              <div class="w-5/12 text-right">
                <label class="text-sm mb-2" for="">Designation </label>
                <label class="text-red-500 text-xs">*</label>
              </div>
              <div class="w-7/12">
                <v-text-field
                  class="inputstyle"
                  placeholder="Enter the User Designation"
                  :rules="[rules.required]"
                  outlined
                  color="success"
                  dense
                  v-model="formData.designation"
                ></v-text-field>
              </div>
            </div>
            <div class="flex gap-5 items-center">
              <div class="w-4/12 text-right">
                <label class="text-sm mb-2" for="">Email ID </label>
                <label class="text-red-500 text-xs">*</label>
              </div>
              <div class="w-8/12 flex gap-1">
                <div>
                  <v-text-field
                    class="inputstyle"
                    placeholder="Enter User's company Email ID"
                    :rules="[rules.email]"
                    outlined
                    color="success"
                    dense
                    v-model="formData.email"
                  ></v-text-field>
                </div>
              </div>
            </div>

            <div class="flex gap-5 items-center">
              <div class="flex gap-4 ml-23">
                <div class="flex w-5/12 text-right">
                  <label class="text-sm mb-2" for="">Profile </label>
                  <p class="text-red-500 text-xs">*</p>
                </div>
                <div class="flex gap-5">
                  <div class="w-8/12 flex items-center gap-3">
                    <v-checkbox
                      class="checkbox"
                      v-model="formData.selected"
                      label="Seller"
                      value="Seller"
                    ></v-checkbox>
                  </div>
                  <div class="w-7/12 flex items-center gap-3">
                    <v-checkbox
                      class="checkbox"
                      v-model="formData.selected"
                      label="Buyer"
                      value="Buyer"
                    ></v-checkbox>
                  </div>
                  <div class="w-7/12 flex items-center gap-3">
                    <v-checkbox
                      class="checkbox"
                      v-model="formData.selected"
                      label="Billing"
                      value="Billing"
                    ></v-checkbox>
                  </div>
                  <div class="w-7/12 flex items-center gap-3">
                    <v-checkbox
                      class="checkbox"
                      v-model="formData.selected"
                      label="Viewer"
                      value="Viewer"
                    ></v-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center pt-16">
            <div>
              <div class="justify-center flex items-center">
                <!-- <button
              class="text-blue px-5 py-2 text-md border"
              @click="laststep"
            >
              Save User
            </button> -->
                <v-btn color="primary" outlined @click="laststep()"
                  >Save User</v-btn
                >
              </div>
              <p class="pt-3 text-xs">
                You can view the above user’s details after saving the changes
              </p>
            </div>
          </div>
        </div>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DialogBox",
  data() {
    return {
      formData: {
        name: "",
        mobileNo: "",
        designation: "",
        email: "",
        selected: [],
      },

      rules: {
        required: (value) => !!value || "This Field Required.",
        mobile: (value) =>
          /^\d{10}$/.test(value) || "Mobile number must be 10 digits",
        email: (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
          "Email Id must be in this Format abc@gmail.com",
      },
    };
  },
  computed: {
    ...mapState(["incerment", "users"]),
  },
  methods: {
    validateName() {
      return this.formData.name.trim() !== "";
    },
    validateMobileNo() {
      const mobileRegex = /^\d{10}$/;
      return mobileRegex.test(this.formData.mobileNo);
    },
    validateDesignation() {
      return this.formData.designation.trim() !== "";
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.formData.email);
    },
    validateCheckBox() {
      return this.formData.selected.length > 0;
    },
    laststep() {
      // if (
      //   this.validateName() &&
      //   this.validateMobileNo() &&
      //   this.validateDesignation() &&
      //   this.validateEmail() &&
      //   this.validateCheckBox()
      // )
      if (this.$refs.form.validate()) {
        alert("Data submitted");
        console.log(JSON.stringify(this.formData), "formDataformDataformData");
        this.$store.commit("ADD_USER_DATA", this.formData);
        const dataA = this.$store.state.users;
        console.log(dataA, "xxxxxxxxxxxxxxxxxx");
        console.log(this.users, "xstatex");

        var inc = 3;
        this.$store.commit("INCREMENT_VALUE", inc);
        const updatedIncrementValue = this.$store.state.increment;
        console.log(updatedIncrementValue, "sdsdsd");
      } else {
        alert("Please fill in all required fields with valid data.");
      }
    },
  },

  mounted() {
    const userData = this.$store.state.data;
    const userDataArray = JSON.parse(JSON.stringify(this.formData));

    console.log(userDataArray);
  },
};
</script>
<style scoped>
.ml-23 {
  margin-left: 91px;
}
.checkbox {
  margin-top: 0px;
  padding-top: 0px;
}
.color {
  color: #1976d2;
}

.inputstyle {
  height: 40px;
  width: 240px;
}

.main {
  padding: 2%;
  /* width: 60%; */
  /* height: 500px; */
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 15%; */
}
input {
  border: 2px solid black;
}
.labelst {
  text-align: end;
}
</style>
