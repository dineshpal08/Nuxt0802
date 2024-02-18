<!-- <form>
        <div style="margin-top: 50px">
           <div class="mt-12"> 
          <v-row justify="center">
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div class="labelst">
                  <label for="companyname"
                    >Registered Company Name <span>*</span></label
                  >
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div class="inputtext">
                  <input
                    type="text"
                    placeholder="F5 InfoTech"
                    v-model="formData.companyName"
                    class=""
                  />
                  <p class="red--text ml-2" v-if="validateCompanyName">
                    {{ validateCompanyName }}
                  </p>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div class="labelst">
                  <label for="companyname">Pan No. *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter the Company PAN no."
                    v-model="formdata.panNo"
                  />
                  <p class="red--text ml-2" v-if="validatePanNo">
                    {{ validatePanNo }}
                  </p>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div class="labelst">
                  <label for="companyname">Website URL *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter the Company PAN no."
                    v-model="formdata.websiteUrl"
                  />
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div class="labelst">
                  <label for="companyname">Tan No.*</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Company TAN no."
                    v-model="formdata.tanNo"
                  />
                  <button class="button button2 upload">Upload</button>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname">Your Name *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="ma-2">
                <div>
                  <input
                    type="text"
                    placeholder=" Enter Your Name"
                    v-model="formdata.name"
                  />
                  <p class="red--text ml-2" v-if="validateName">
                    {{ validateName }}
                  </p>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname">CIN NO. *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter the CIN no."
                    v-model="formdata.cinNo"
                  />
                  <p class="red--text ml-2" v-if="validateCinNo">
                    {{ validateCinNo }}
                  </p>
                  <button class="button button2 upload">Upload</button>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname">Your Email ID *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Email ID"
                    v-model="formdata.emailId"
                  />
                  <p class="red--text ml-2" v-if="validateEmailId">
                    {{ validateEmailId }}
                  </p>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname">GST NO. *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter the Company GST no."
                    v-model="formdata.gstNo"
                  />
                  <button class="button button2 upload">Upload</button>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname">Your Mobile No. *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Mobile No."
                    v-model="formdata.mobileNo"
                  />
                  <p class="red--text ml-2" v-if="validateMobileNo">
                    {{ validateMobileNo }}
                  </p>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname">Cancelled cheque *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <button class="button button2 upload">Upload</button>
                </div>
              </v-sheet>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname">Billing Address *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <textarea
                    placeholder="Enter the Company billing address"
                    v-model="formdata.bilingAddress"
                  ></textarea>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div class="labelst">
                  <label for="companyname"
                    >Company Registration Certificate *</label
                  >
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2 ma-2">
                <div>
                  <button class="button button2 upload">Upload</button>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="3">
              <v-sheet class="pa-2"> </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2">
                <div class="labelst">
                  <label for="companyname">Managment Authorision *</label>
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="3">
              <v-sheet class="pa-2">
                <div>
                  <button class="button button2 upload">Upload</button>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </form> -->

/////////////////////
<!-- <div style="text-align: center" margin-top="20px">
      <button class="button button3">Back</button>
      <button @click="submit()" class="button button3">Next ></button>
    </div>
    <div class="lastpara">
      <p style="text-align: center; margin-top: 25px; padding-bottom: 100px">
        <b
          >Check the entered information before proceeding in the next part of
          the form</b
        >
      </p>
    </div> -->
//////

  -->
  
  <div class="main w-2/3 mx-auto shadow-lg">
    <div>
      <h2 class="head"><b>Add User</b></h2>
    </div>
    <div>
      <v-row justify="center">
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div class="labelst">
              <label for="companyname">Name *</label>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div class="inputtext">
              <!-- <input
                type="text"
                placeholder="Enter the User Name"
                v-model="formdata.name"
              /> -->
              <!-- <v-text-field
                placeholder="Enter the User Name"
                solo
                v-model="formdata.name"
              ></v-text-field> -->
              <v-text-field
                class="inputstyle"
                placeholder="Enter the User Name"
                color="success"
                outlined
                dense
              >
              </v-text-field>
              <p class="red--text" v-if="validateName">{{ validateName }}</p>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div class="labelst">
              <label for="companyname">Mobile No. *</label>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div>
              <!-- <input
                type="text"
                placeholder="Enter Mobile no."
                v-model="formdata.mobileNo"
              /> -->
              <v-text-field
                placeholder="Placeholder"
                outlined
                color="success"
                dense
              ></v-text-field>
              <p class="red--text" v-if="validateMobileNo">
                {{ validateMobileNo }}
              </p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div class="labelst">
              <label for="companyname">Desigation *</label>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div>
              <input
                type="text"
                placeholder="Enter the User Desigation"
                v-model="formdata.desigation"
              />
              <p class="red--text" v-if="validateDesigation">
                {{ validateDesigation }}
              </p>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div class="labelst">
              <label for="companyname">Email ID.*</label>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div>
              <input
                type="text"
                placeholder="Enter User Email Id"
                v-model="formdata.emailId"
              />
              <p class="red--text" v-if="validateEmailId">
                {{ validateEmailId }}
              </p>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <div class="labelst">
              <label for="companyname">Profile *</label>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="9">
          <v-container class="d-flex">
            <v-checkbox
              v-model="formdata.selected"
              label="Seller"
              value="Seller"
            ></v-checkbox>
            <v-checkbox
              v-model="formdata.selected"
              label="Buyer"
              value="Buyer"
            ></v-checkbox>
            <v-checkbox
              v-model="formdata.selected"
              label="Biling"
              value="Biling"
            ></v-checkbox>
            <v-checkbox
              v-model="formdata.selected"
              label="Viewer"
              value="Viewer"
            ></v-checkbox>
          </v-container>
        </v-col>
      </v-row>
    </div>
    <div>
      <button @click="saveUser">Save User</button>
    </div>
  </div>
 -->