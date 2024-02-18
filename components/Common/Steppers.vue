<!-- <template>
  <div>
    <div class="flex justify-center items-start gap-3 mt-16 text-lg textblue">
      Setup your company’s inventory management/ buying system in 3 steps
    </div>
    <div class="d-flex justify-center">
      <div class="mt-12 justify-center text-center">
        <v-btn class="circle-btn mx-2" color="primary" fab>
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
        </v-btn>
        <div>Company Details</div>
      </div>

      <div
        :class="
          incerment > 1
            ? ' w-40 h-1.5 rounded-lg bgblue mt-16'
            : 'w-40 h-1.5 rounded-lg bggray mt-16'
        "
      ></div>

      <div class="mt-12 justify-center text-center">
        <v-btn class="circle-btn mx-2 mb-2" :color="getcolorbutton1()" fab>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.75 4.5a.75.75 0 0 1 .75.75V10h1.75a.75.75 0 0 1 0 1.5H11.5v1.75a.75.75 0 0 1-1.5 0V11.5H8.25a.75.75 0 0 1 0-1.5H10V8.25a.75.75 0 0 1 .75-.75M5 7c1.493 0 2.834.655 3.75 1.693v.057h-.5a2 2 0 0 0-.97 3.75H.5A.5.5 0 0 1 0 12a5 5 0 0 1 5-5"
              clip-rule="evenodd"
            />
          </svg>
        </v-btn>
        <div>Add User</div>
      </div>

      <div
        :class="
          incerment > 2
            ? 'w-40 h-1.5 rounded-lg bgblue mt-16'
            : 'w-40 h-1.5 rounded-lg bggray mt-16'
        "
      ></div>

      <div class="mt-12 justify-center text-center">
        <v-btn class="circle-btn mx-2 mb-2" :color="getcolorbutton2()" fab>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="currentColor"
                d="M19.768 2.693c.956-.344 1.88.58 1.536 1.535l-6.04 16.777c-.375 1.043-1.842 1.063-2.246.03l-2.829-7.228l-7.228-2.828c-1.032-.404-1.012-1.871.03-2.247z"
              />
            </g>
          </svg>
        </v-btn>
        <div>Submit for Approval</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HeroiconsBuildingOffice16Solid",

  data() {
    return {
      // incerment: 3,
    };
  },

  methods: {
    getcolorbutton1() {
      if (this.incerment > 1) {
        return "primary";
      } else {
        return "secondary";
      }
    },
    getcolorbutton2() {
      if (this.incerment > 2) {
        return "primary";
      } else {
        return "secondary";
      }
    },

    getall() {
      console.log(this.increment);
    },
  },

  computed: {
    ...mapState(["increment"]),
  },
  mounted() {
    this.getall();
  },
};
</script>
<style scoped>
.bgblue {
  background-color: #1976d2;
}
.bggray {
  background-color: gray;
}
.stripername {
  text-align: center;
  margin-top: 50px;
}

svg {
  height: 30px;
  width: 30px;
}
.circle-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1976d2;
  color: #1976d2;
}

.textblue {
  color: #1976d2;
}
</style> -->
