<template>
  <div class="w-11/12 mx-auto mb-36 p-8 elevation-6">
    <div class="d-flex">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="svg"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3.75 2a.75.75 0 0 0 0 1.5H4v9h-.25a.75.75 0 0 0 0 1.5H6a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 0 0-1.5H12v-9h.25a.75.75 0 0 0 0-1.5zM6.5 4a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5v-.5A.5.5 0 0 0 7 4zM6 7a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v.5A.5.5 0 0 1 7 8h-.5a.5.5 0 0 1-.5-.5zm3-3a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5h.5A.5.5 0 0 0 10 5v-.5a.5.5 0 0 0-.5-.5zm-.5 3a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-lg mb-0 text-color"><b>Company Details</b></h3>
        <p>
          Adding your company’s details is a mandatory step in registering your
          company
        </p>
      </div>
    </div>
    <br />
    <hr />
    <div>
      <v-form ref="form" class="forms mt-10">
        <div class="grid grid-cols-2 gap-12">
          <div class="flex gap-5 items-center">
            <div class="w-5/12 text-right">
              <div>
                <label class="text-sm">Registered Company Name </label>
                <label class="text-red-500">*</label>
              </div>
            </div>

            <div class="w-7/12 items-center justify-center">
              <v-text-field
                class="inputstyle"
                v-model.trim="formData.companyName"
                :rules="[rules.required]"
                outlined
                dense
                color="success"
                placeholder="Enter Company name"
                persistent-hint
                hint="Company Name as Registered on Official Documents"
              ></v-text-field>
              <!-- <p
                v-if="!validateCompanyName()"
                class="text-red-500 text-xs mt-2"
              >
                Company Name is required
              </p> -->
              <!-- <p class="text-xs mt-2">
                Company Name as Registered on Official Documents
              </p> -->
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for="">PAN No </label>
              <label class="text-red-500 text-xs">*</label>
            </div>

            <div class="w-8/12 flex items-center gap-2">
              <div>
                <v-text-field
                  @input="ToUppercase"
                  v-model="formData.panNo"
                  :rules="[rules.pan]"
                  class="text-uppercase inputstyle"
                  placeholder="Enter the Company Pan No."
                  outlined
                  color="success"
                  dense
                ></v-text-field>
              </div>

              <!-- <div class="pl-9">
                <img
                  class="w-10 h-10 mx-auto"
                  src="https://tse1.mm.bing.net/th?id=OIP.74Fct7_KqN0IgcajG2ZkkgHaJG&pid=Api&rs=1&c=1&qlt=95&w=88&h=109"
                  alt=""
                />
                <p class="text-xs mt-2">Company-pan.pdf</p>
              </div> -->
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-5/12 text-right">
              <label class="text-sm mb-2" for="">Website URL </label>
            </div>

            <div class="w-7/12">
              <v-text-field
                class="inputstyle"
                placeholder="For E.g www.PNG.com"
                outlined
                color="success"
                dense
                v-model="formData.websiteUrl"
              ></v-text-field>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for="">TAN No.</label>
            </div>
            <div class="w-8/12 flex items-start gap-1">
              <div>
                <v-text-field
                  class="inputstyle"
                  placeholder="Enter the Company PAN no."
                  outlined
                  color="success"
                  dense
                  v-model="formData.tanNo"
                  persistent-hint
                  hint="TAN : Tax Deduction Account Number
                                of the company"
                ></v-text-field>
              </div>
              <div>
                <!-- Hidden input of type file -->
                <!-- <input
                  type="file"
                  ref="fileInput"
                  style="display: none"
                  @change="handleFileUpload"
                /> -->
                <!-- Upload button -->
                <v-btn class="mt-1.5 ml-4" color="accent" outlined rounded small
                  >Upload</v-btn
                >
              </div>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-5/12 text-right">
              <label class="text-sm mb-2" for="">Your Name </label>
              <label class="text-red-500 text-xs">*</label>
            </div>
            <div class="w-7/12">
              <v-text-field
                class="inputstyle"
                @input="capitalizeFirstLetterOfWords"
                placeholder="Enter Your Name"
                :rules="[rules.required]"
                outlined
                color="success"
                dense
                v-model="formData.name"
              ></v-text-field>

              <!-- <p class="text-xs mt-2">
                      Company Name as Registered on Official Documents
                    </p> -->
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for="">CIN No. </label>
              <label class="text-red-500 text-xs">*</label>
            </div>
            <div class="w-8/12 flex items-start gap-1">
              <div>
                <v-text-field
                  class="inputstyle"
                  placeholder="Enter the CIN no."
                  :rules="[rules.required]"
                  outlined
                  color="success"
                  dense
                  v-model="formData.cinNo"
                ></v-text-field>
              </div>

              <div>
                <v-btn class="mt-1.5 ml-4" color="accent" outlined rounded small
                  >Upload</v-btn
                >
              </div>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-5/12 text-right">
              <label class="text-sm mb-2" for="">Your Email ID </label>
              <label class="text-red-500 text-xs">*</label>
            </div>
            <div class="w-7/12">
              <v-text-field
                class="inputstyle"
                placeholder="Enter your Email ID"
                :rules="[rules.email]"
                outlined
                color="success"
                dense
                v-model="formData.emailId"
                persistent-hint
                hint="The above Email ID will be treated as company’s admin ID and
                will be used for registration process"
              ></v-text-field>
              <!-- <p class="text-xs mt-2">
                The above Email ID will be treated as company’s admin ID and
                will be used for registration process
              </p> -->
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for="">GST No.</label>
            </div>
            <div class="w-8/12 flex items-start gap-1">
              <div>
                <v-text-field
                  class="inputstyle"
                  placeholder="Enter the Company GST no."
                  outlined
                  color="success"
                  dense
                  v-model="formData.gstNo"
                ></v-text-field>
              </div>
              <div>
                <v-btn class="mt-1.5 ml-4" color="accent" outlined rounded small
                  >Upload</v-btn
                >
              </div>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-5/12 text-right">
              <label class="text-sm mb-2" for="">Your Mobile No. </label>
              <label class="text-red-500 text-xs">*</label>
            </div>
            <div class="w-7/12">
              <v-text-field
                v-model="formData.mobileNo"
                type="number"
                @input="inputRule()"
                hide-spin-buttons
                :rules="[rules.required, rules.counter]"
                class="inputstyle"
                placeholder="Enter Your Mobile No."
                outlined
                color="success"
                dense
                persistent-hint
                hint="The above mobile no. will be treated as company’s admin
                no. and will be used for registration process"
                maxlength="10"
              ></v-text-field>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for="">Cancelled Cheque </label>
              <label class="text-xs"
                >( Only PDF file format is allowed )
              </label>
            </div>
            <div class="w-8/12 flex items-start gap-1">
              <div>
                <v-btn class="mt-2" color="accent" outlined rounded small
                  >Upload</v-btn
                >
              </div>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-5/12 text-right">
              <label class="text-sm mb-2" for="">Billing Address </label>
            </div>
            <div class="w-7/12">
              <v-textarea
                class="textareainputstyle"
                color="success"
                outlined
                placeholder="Enter the Company Biling Address"
                v-model="formData.bilingAddress"
                persistent-hint
                hint="Will be used for all offline communications and billing purposes"
              ></v-textarea>

              <!-- <p class="text-xs mt-12">
                Will be used for all offline communications and billing purposes
              </p> -->
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for=""
                >Company Registration Certificate</label
              >
            </div>
            <div class="w-8/12 flex items-start gap-1">
              <div>
                <v-btn class="mt-2" color="accent" outlined rounded small
                  >Upload</v-btn
                >
              </div>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right"></div>
            <div class="w-8/12 flex items-start gap-1">
              <div></div>
            </div>
          </div>

          <div class="flex gap-5 items-center">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for=""
                >Management Authorization</label
              >
            </div>
            <!-- <div>
              <img
                class="w-10 h-10 mx-auto"
                src="https://tse1.mm.bing.net/th?id=OIP.74Fct7_KqN0IgcajG2ZkkgHaJG&pid=Api&rs=1&c=1&qlt=95&w=88&h=109"
                alt=""
              />
              <p class="text-xs mt-2">Company-pan.pdf</p>
            </div> -->
            <div class="w-8/12 flex items-start gap-1">
              <div>
                <v-btn class="mt-2" color="accent" outlined rounded small
                  >Upload</v-btn
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center w-full mt-10">
          <div>
            <div class="justify-center flex items-center gap-5">
              <v-btn class="mt-4" color="accent" outlined>Back</v-btn>
              <v-btn class="mt-4" color="accent" outlined @click="submit()"
                >Next ></v-btn
              >
            </div>
            <p class="mt-4 text-xs">
              Check the entered information before proceeding in the next part
              of the form
            </p>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // name: "HeroiconsBuildingOffice16Solid",
  name: "FirstPage",

  data() {
    return {
      formData: {
        companyName: "",
        panNo: "",
        websiteUrl: "",
        tanNo: "",
        name: "",
        cinNo: "",
        emailId: "",
        gstNo: "",
        mobileNo: "",
        bilingAddress: "",
      },
      rules: {
        required: (value) => !!value.trim() || "This Field Required.",
        counter: (value) => value.length == 10 || "Max 10 characters",
        mobile: (value) =>
          /^\d{10}$/.test(value) || "Mobile number must be 10 digits",
        pan: (value) =>
          /^[A-Z]{5}\d{4}[A-Z]$/.test(value) || "Enter Valid Pan Card Format",
        email: (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
          "Email Id must be in this Format abc@gmail.com",
      },
    };
  },

  methods: {
    ToUppercase() {
      this.formData.panNo = this.formData.panNo.toUpperCase();
    },

    capitalizeFirstLetterOfWords() {
      if (this.formData.name.trim() !== "") {
        // Split the input value into words
        const words = this.formData.name.split(/\s+/);

        // Capitalize the first letter of each word
        const capitalizedWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });

        // Join the capitalized words back together
        this.formData.name = capitalizedWords.join(" ");
      }
    },
    inputRule() {
      return [
        (v) => !!v || "Input is required",
        (v) => (v && v.length <= 10) || "Input must be no more than 10 digits",
      ];
    },

    submit() {
      if (this.$refs.form.validate()) {
        alert("Data submitted");
        var increment = 2;

        this.$store.commit("INCREMENT_VALUE", increment);
        const updatedIncrementValue = this.$store.state.increment;
        console.log(updatedIncrementValue, "sdsdsd");

        console.log(JSON.stringify(this.formData));
        console.log(this.formData);
      } else {
        alert("All * Field is Required");
      }
    },
  },
  computed: {
    mobileNoLimited: {
      get() {
        return this.formData.mobileNo;
      },
      set(value) {
        if (value.length <= 10) {
          this.formData.mobileNo = value;
        } else {
          this.formData.mobileNo = value.slice(0, 10);
        }
      },
    },
    // mobileNumberRule() {
    //   return [
    //     (v) => !!v || "Input is required",
    //     (v) => (v && v.length <= 10) || "Input must be no more than 10 digits",
    //   ];
    // },
    panCardNumberRule() {
      return [
        (v) => !!v || "PAN card number is required",
        (v) =>
          /^[A-Z]{5}\d{4}[A-Z]$/.test(v) || "Invalid PAN card number format",
        (v) =>
          (v && v.length === 10) || "PAN card number must be 10 characters",
      ];
    },

    ...mapState(["increment"]),
  },
};
</script>

<style scoped>
/* .button2 {
  height: 40px;
  width: 100px;
  background-color: white;
  color: black;
  border: 2px solid #008cba;
  border-radius: 50px;
} */

/* .button2:hover {
  background-color: #008cba;
  color: white;
} */

.inputstyle {
  height: 40px;
  width: 290px;
  /* border: 1px solid gray;
  font-size: 12px;
  text-align: start; */
  /* padding: 10px 30px 10px 30px; */
}
.textareainputstyle {
  height: 80px;
  width: 290px;
  /* border: 1px solid gray;
  font-size: 12px;
  text-align: start;
  padding: 10px 30px 10px 30px; */
}
textarea {
  border: 2px solid black;
  height: 100px;
  width: 230px;
}
.upload {
  height: 30px;
  width: 70px;
}

.button3 {
  height: 35px;
  width: 85px;
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}
.svg {
  height: 50px;
  width: 50px;
  margin-left: 20px;
  color: #1976d2;
}

.labelst {
  text-align: end;
  margin-top: 15px;
  font-size: medium;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

.lastpara {
  margin-bottom: 50px;
}
.text-color {
  color: #1976d2;
}
.button {
  color: #1976d2;
}
.mainclass {
  justify-content: center;
  width: 90%;
  margin-left: 5%;
  padding: 2%;
  margin-bottom: 10%;
  box-shadow: 1px 1px 8px 5px rgb(211, 208, 208);

  /* background-color: aqua; */
}
</style>
