Template is like a layout, script won't show up if it's not in template.

<template>
  <div class="artist-detail">
    <h1>{{artists[id].name}} : {{artists[id].artistPrefix}} Artist</h1>
    <div class="body-section">{{artists[id].description}}</div>
    <img
      v-b-modal="'mainpicmodal'"
      class="main-pic"
      v-bind:src="'/ArtistPics/' + artists[id].mainPic"
    />
    <b-modal :id="'mainpicmodal'" body-class="modal-body">
      <div
        v-b-modal="'mainpicmodal'"
        class="main-pic-modal"
        v-bind:style="'background-image:url(/ArtistPics/' + artists[id].mainPic +')'"
      ></div>
    </b-modal>
    <div class="pics">
      <!-- The modal -->
      <div
          v-for="pic in artists[id].pics"
          :key="pic"
          class="pic-container">
        <b-modal :id="'myModal'+pic" body-class="modal-body">
          <div class="sub-pic" v-bind:style="'background-image:url(/ArtistPics/' + pic +')'"></div>
        </b-modal>
        <div
          v-b-modal="'myModal'+pic"
          class="sub-pic"
          v-bind:style="'background-image:url(/ArtistPics/' + pic +')'"
        ></div>
      </div>
      <b-button
        v-if="artists[id].instagramLink"
        :href="artists[id].instagramLink"
        class="instagram"
      >
        <i class="fab fa-instagram"></i>
        Artist's Instagram
      </b-button>
      <b-button v-if="artists[id].webLink" :href="artists[id].webLink" class="webLink">
        <i class="fab fa-webLink"></i>
        Artist's Web Link
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistDetail",
  data: function() {
    return {
      artists: {
        babyboymiller: {
          name: "Baby Boy Miller / Michael Michael Thomas",
          artistPrefix: "Modern",
          description:
            "This Artist uses: Crayons, Pens, Marker, and Acrylic Paint.",
          mainPic: "fergPic.jpg",
          webLink: "https://www.facebook.com/michaelmichael.thomas",
          pics: [
            "fergpic1.jpg",
            "bbm1.png",
            "fergpic2.jpg",
            "fergpic3.jpg",
            "fergpic4.jpg",
            "fergpic5.jpg",
            "fergpic6.jpg",
            "fergpic7.jpg",
            "fergpic8.jpg",
            "fergpic9.jpg",
            "fergpic10.jpg",
            "fergpic11.jpg",
            "fergpic12.jpg",
            "fergpic13.jpg",
            "fergpic14.jpg",
            "fergpic15.jpg",
            "fergpic16.jpg",
            "fergpic17.jpg",
            "fergpic18.jpg",
            "fergpic19.jpg",
            "fergpic20.jpg",
          ]
        },
        eric: {
          name: "Eric Johnson",
          artistPrefix: "Chicago Native",
          description: "Acrylic, Pencil, Marker, Crayon",
          mainPic: "birthdayFace.JPG",
          webLink: "https://www.erj-art.com",
          pics: [
            "sunlightinthecavern.JPG",
            "autumn.png",
            "tropicalbreeze.JPG",
            "artworkofchicago.png",
            "underthesea.png",
            "lavenderfields.png",
            "mynewtoothpaste.png",
            "evolution.JPG"
          ]
        },
        mattgeer: {
          name: "Matt Geer",
          artistPrefix: "Chicago Native",
          description:
            "Matt Geer is a rare breed of Chicago’s avant garde underbelly.Mostly self taught, with a foundation in street art, paintng, and drawing. He is also known to work in textiles, and found objects. Breaking his work into separate series, each with its own rule set, and focus. His body of work shares the same underlying themes, but with a shifting focus through the lens of the artist. His currant paintings have become more minimalist. Favoring bold lines, and color in a reimagining of his own graphic roots. Elevating what grabs the eye, and casting the rest aside as unnecessary filler.",
          mainPic: "mattgeer.jpg",
          webLink: "https://www.facebook.com/matt.geer.39",
          pics: [
            "mattgeer1.jpg",
            "mattgeer2.jpg",
            "mattgeer3.jpg",
            "mattgeer4.jpg",
            "mattgeer5.jpg",
            "mattgeer6.jpg",
            "mattgeer7.jpg",
            "mattgeer8.jpg",
            "mattgeer9.jpg",
            "mattgeer10.jpg"
          ]
        },
        // "erin": {
        //   name: "Erin Donnelly Ellis",
        //   artistPrefix: "Chicago Native",
        //   description: "Photo, Drawing, Painting, and Jewerly Specialist",
        //   mainPic: "erinpagepic.png",
        //   pics: [
        //     "pic 1 .png",
        //     "pic 2 .png",
        //     "pic 3 .png",

        //   ]
        // },
        // judson: {
        //   name: "Judson Schwertman",
        //   artistPrefix: "Chicago Native",
        //   description: "Abstract Painter / Modern Artist",
        //   mainPic: "juddself.jpg",
        //   instagramLink: "https://www.instagram.com/juddie_3birds/",
        //   pics: [
        //     "juddpainting3.png",
        //     "juddEmailPainting.jpg",
        //     "judd14.jpg",
        //     "judd16.jpg",
        //     "judd15.jpg",
        //     "judd13.jpg",
        //     "judd11.jpg",
        //     "judd10.jpg",
        //     "judd8.jpg",
        //     "judd6.jpg",
        //     "judd5.png",
        //     "judd3.jpg",
        //     "judd9.jpg",
        //     "judd1.png",
        //     "judd4.jpg",
        //     "juddpic1.jpg",
        //     "juddpic2.jpg",
        //     "juddpic3.jpg",
        //     "juddpic4.jpg",
        //     "juddpic5.jpg",
        //     "juddpic6.jpg",
        //     "juddpic7.jpg",
        //     "juddpic8.jpg",
        //     "juddpic9.jpg",
        //     "juddpic10.jpg",
        //     "juddpic11.jpg",
        //     "juddpic12.jpg",
        //     "juddpic13.jpg",
        //     "juddpic14.jpg",
        //     "juddpic15.jpg",
        //     "juddpic16.jpg",
        //     "juddpic17.jpg"
        //   ]
        // },
        wendy: {
          name: "Wendy Montague",
          artistPrefix: "Chicago Native",
          description: "Painter, Mixed-Media, Drawings",
          instagramLink: "https://www.instagram.com/wendymontague/",
          mainPic: "wendy2.jpg",
          pics: [
            "wendypic.jpg",
            "wendy.jpg",
            "wendy3.jpg",
            "wendy1.jpg",
            "wendypic4.jpg",
            "wendypic5.jpg",
            "wendypic6.jpg",
            "wendypic7.jpg",
            "wendypic8.jpg",
            "wendypic9.jpg",
            "wendypic10.jpg",
            "wendypic11.jpg"
          ]
          // },
          // dave: {
          //   name: "Dave Depew",
          //   artistPrefix: "Chicago Native",
          //   description: "Painter and Drawer",
          //   mainPic: "davepic.jpg",
          //   pics: ["pic 1 .png", "pic 2 .png", "pic 3 .png"]
          // },"thano": {
          //   name: "Thano Ellis",
          //   artistPrefix: "Chicago Native",
          //   description: "Wood Working",
          //   mainPic: "thanopic.png",
          //   pics: [
          //     "pic 1 .png",
          //     "pic 2 .png",
          //     "pic 3 .png",
          //   ]
        }
      }
    };
  },
  props: {
    id: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin-left: 20px;
}
.body-section {
  font-size: 30px;
}
.main-pic {
  margin-top: 60px;
  width: 20%;
  height: 300px;
}
.pics {
  margin-top: 60px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.sub-pic {
  width: 100%;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.main-pic-modal {
  width: 100%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.pic-container {
  width: 30%;
}
.instagramLink {
  background-color: coral;
  text-decoration-color: lightblue;
  border-color: rgb(187, 12, 231);
}
.btn-secondary:hover {
  color: rgb(255, 251, 4);
  background-color: rgb(234, 0, 255);
  border-color: #0af515;
}
</style>

<style>
.modal-body {
  background-color: black;
}
.modal-header {
  background-color: rgb(17, 221, 248);
}
.modal-footer {
  background-color: rgb(187, 12, 231);
}
.btn.btn-primary {
  background-color: black;
  color: lightcoral;
  transition: linear 1s;
}
.btn.btn-secondary {
  text: bold;
  color: blue;
  background-color: coral;
  transition: linear 1s;
}
button.close {
  color: yellow;
  transition: linear 1s;
}
nav.drop-down. {
  color: purple;
  transition: linear 1s;
}
</style>
>
