<template>
  <div>
    <div class="mainboxshadow">
      <div style="display: flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="svg1"
          >
            <title>office-building</title>
            <path
              d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"
            />
          </svg>
        </div>
        <div>
          <p><b>Company Details</b></p>
          <p>
            Adding your company’s details is a mandatory step in registering
            your company
          </p>
        </div>
      </div>
      <br /><br />
      <hr />
      <div h-75 style="margin-top: 50px">
        <v-row justify="center">
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Registered Company Name *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="inputtext">
                <input type="text" placeholder="F5 InfoTech" />
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Pan No. *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder="Enter the Company PAN no." />
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Website URL *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder="Enter the Company PAN no." />
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Tan No.*</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder="Enter Company TAN no." />
                <button class="button button2 upload">Upload</button>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Your Name *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder=" Enter Your Name" />
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">CIN NO. *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder="Enter the CIN no." />
                <button class="button button2 upload">Upload</button>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Your Email ID *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder="Enter your Email ID" />
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">GST NO. *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder="Enter the Company GST no." />
                <button class="button button2 upload">Upload</button>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Your Mobile No. *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <input type="text" placeholder="Enter Your Mobile No." />
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Cancelled cheque *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <button class="button button2 upload">Upload</button>
              </div>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname">Billing Address *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <textarea
                  placeholder="Enter the Company billing address"
                ></textarea>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div class="labelst">
                <label for="companyname"
                  >Company Registration Certificate *</label
                >
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2 ma-2">
              <div>
                <button class="button button2 upload">Upload</button>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4">
            <v-sheet class="pa-2"> </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2">
              <div class="labelst">
                <label for="companyname">Managment Authorision *</label>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="2">
            <v-sheet class="pa-2">
              <div>
                <button class="button button2 upload">Upload</button>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>

      <div style="text-align: center" margin-top="20px">
        <button class="button button3">Back</button>
        <button class="button button3">Next ></button>
      </div>
      <div class="lastpara">
        <p style="text-align: center; margin-top: 25px; padding-bottom: 100px">
          <b
            >Check the entered information before proceeding in the next part of
            the form</b
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button2 {
  height: 40px;
  width: 100px;
  background-color: white;
  color: black;
  border: 2px solid #008cba;
  border-radius: 50px;
}

.button2:hover {
  background-color: #008cba;
  color: white;
}
.top {
  height: 70px;
  padding: 15px;
  text-align: right;
  box-shadow: 1px 5px 5px rgb(118, 117, 117);
}

input {
  border: 2px solid black;
  margin: 10px;
  height: 45px;
  width: 230px;
}
textarea {
  border: 2px solid black;
  height: 100px;
  width: 230px;
  margin: 10px;
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
.svg1 {
  height: 40px;
  width: 30px;
}
.mainboxshadow {
  box-shadow: 1px 5px 5px rgb(118, 117, 117);
  margin-top: 50px;
}

.labelst {
  text-align: end;
  margin-top: 15px;
  font-size: medium;
}
input::placeholder {
  font-weight: bold;
  opacity: 0.8;
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
  padding: 10px;
}
.lastpara {
  margin-bottom: 50px;
}
</style>
