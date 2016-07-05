// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Spectacle,
  Deck,
  Slide,
  Heading,
  S,
  Text,
  List,
  ListItem,
  Image,
  Code,
  BlockQuote,
  Quote,
  Cite,
  Link,
} from "spectacle";

import {
  theme,
} from "../assets";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  why: require("../assets/why.gif"),
  steps: require("../assets/steps-to-build.png"),
  fine: require("../assets/fine.gif"),
  burns: require("../assets/burns.gif"),
  fastlane: require("../assets/fastlane.png"),
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} transitionDuration={500}>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} margin="10px 0 0 0" fit caps lineHeight={1} textColor="light-primary">
              Continuous <br></br> Meteor App <br></br>Deploys
            </Heading>
            <Heading size={6} textFont="secondary" textColor="light-secondary">
              <S type="italic">From build, to deploy, to distribution</S>
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="light-primary" textColor="dark-secondary">
            <Heading fit lineHeight={1} textColor="primary">
              Automating...
            </Heading>
            <List BulletList textFont="secondary">
              <Appear><ListItem>Build iOS app</ListItem></Appear>
              <Appear><ListItem>Build Android app</ListItem></Appear>
              <Appear><ListItem>Deploy to Galaxy</ListItem></Appear>
              <Appear><ListItem>Deploy to Hockey</ListItem></Appear>
              <Appear><ListItem>Deploy to iTunes Store/TestFlight</ListItem></Appear>
              <Appear><ListItem>Deploy to Google Play Store</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgImage={images.why.replace("/", "")}></Slide>

          <Slide transition={[]} bgColor="light-primary">
            <Heading size={10} textFont="primary" textColor="dark-secondary">
              <BlockQuote>
                <Quote>Automate what is important.</Quote>
                <Cite>Wise Person</Cite>
              </BlockQuote>
            </Heading>
            <Text
              margin="30px 0 0 0"
              textColor="dark-primary"
              textFont="secondary"
              textAlign="left"
              textSize="28px"
              lineHeight={1.4}
            >
              We have a team of XXX developers supporting XXX projects, and we have a lot to do! As developers, we should be spending our time adding value for our users, not sitting around waiting on long build and deploy processes. As a team, we try to automate everything that we can.
            </Text>
          </Slide>

          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="light-primary">
              How did we <br></br>get here?!?
            </Heading>
            <Heading size={6} textFont="secondary" textColor="light-secondary">
              <S type="italic">and who is to blame?</S>
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="light-primary" textColor="dark-secondary">
            <Heading fit lineHeight={1} textColor="primary">
              New iOS/Android App
            </Heading>
            <List textFont="secondary">
              <Appear><ListItem>Add more value than current app</ListItem></Appear>
              <Appear><ListItem>Lots of stakeholders</ListItem></Appear>
              <Appear><ListItem>Ship one alpha build a week</ListItem></Appear>
              <Appear><ListItem>We chose Meteor</ListItem></Appear>
              <Appear><ListItem>After doing some research...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgColor="dark-primary" bgImage={images.steps.replace("/", "")} notes={`
            meteor build, upload tarball to s3, create task def on ecs, wait, open xcode,
            archive app, upload to itunes, sign android app, align android app,
            upload to google play
          `}>
          </Slide>

          <Slide transition={[]} bgColor="light-primary" textColor="dark-primary">
            <Heading fit lineHeight={1} textColor="primary">
              Results
            </Heading>
            <Heading size={6} textFont="secondary" lineHeight={1} textColor="dark-secondary">
              <S type="italic">Takes 30 minutes</S>
            </Heading>

            <List textFont="secondary">
              <Appear><ListItem>Not bad once a week</ListItem></Appear>
              <Appear><ListItem>Requires whole team to understand process</ListItem></Appear>
              <Appear><ListItem>Pretty tedious</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgImage={images.fine.replace("/", "")}></Slide>

          <Slide transition={[]} bgColor="light-primary" textColor="dark-primary">
            <Heading fit lineHeight={1} textColor="primary">
              Things Go Wrong
            </Heading>
            <Heading size={6} textFont="secondary" textColor="dark-secondary">
              <S type="italic">30 minutes is generous</S>
            </Heading>
            <List textFont="secondary">
              <Appear><ListItem>iOS cert and signing issues</ListItem></Appear>
              <Appear><ListItem>User error</ListItem></Appear>
              <Appear><ListItem>Forget key passwords</ListItem></Appear>
              <Appear><ListItem>Forget how to Xcode</ListItem></Appear>
              <Appear><ListItem>Forget to update GraphQL server</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgImage={images.burns.replace("/", "")} bgDarken={0.75}>
            <Heading fit caps lineHeight={1} textColor="light-primary">
              There is a better way
            </Heading>
          </Slide>

          <CodeSlide
            lang="bash"
            transition={[]}
            code={require("raw!../assets/build.example")}
            ranges={[
              { loc: [0, 5], title: "Launch" },
              { loc: [0, 1], note: "build your meteor app for iOS and Android" },
              { loc: [1, 2], note: "deploy your app to Galaxy" },
              { loc: [2, 3], note: "distribute iOS and Android through Hockey" },
              { loc: [3, 4], note: "distribute iOS through App Store / TestFlight" },
              { loc: [4, 5], note: "distribute Android through Google Play Store" },
            ]}
            route={{ slide: 10 }}
          />

          <Slide transition={[]} bgColor="primary" textColor="light-primary" notes={`
            android on hockey, ios on hockey, android on google play, ios on testflight,
            wouldn't do this for one build, but alpha/beta/production,
            actually demo the basic-example
          `}>
            <Heading size={3} textFont="primary" textColor="light-secondary">
              Demo
            </Heading>
            <List textFont="secondary">
              <ListItem>Android on Hockey</ListItem>
              <ListItem>iOS on Hockey</ListItem>
              <ListItem>Android on Google Play</ListItem>
              <ListItem>iOS on TestFlight</ListItem>
              <ListItem>Start Live Demo of Basic Example</ListItem>
            </List>
          </Slide>

          <Slide transition={[]} bgColor="light-primary" textColor="dark-primary">
            <Heading fit lineHeight={1} textColor="primary">
              So Why Launch?
            </Heading>
            <Heading size={6} textFont="secondary" textColor="dark-secondary">
              <S type="italic">Automation tools for iOS and Android do exist</S>
            </Heading>
            <List textFont="secondary">
              <Appear><ListItem>New Xcode project each build</ListItem></Appear>
              <Appear><ListItem>Not easy to automate projects targeting iOS and Android from same code base</ListItem></Appear>
              <Appear><ListItem>Most do not play well with new Xcode project</ListItem></Appear>
              <Appear><ListItem>Launch targets Meteor specifically</ListItem></Appear>
              <Appear><ListItem>Easy to manage from one file: launch.json</ListItem></Appear>
            </List>
          </Slide>

          <CodeSlide
            lang="bash"
            transition={[]}
            code={require("raw!../assets/getting-started.example")}
            ranges={[
              { loc: [0, 2], title: "Getting Started" },
              { loc: [0, 1], note: "places launch.json in your directory" },
              { loc: [1, 2], note: "yes, i use vim" },
            ]}
            route={{ slide: 13 }}
          />

          <CodeSlide
            lang="json"
            transition={[]}
            code={require("raw!../assets/launch.json.example")}
            ranges={[
              { loc: [0, 20], title: "launch.json" },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [2, 3] },
              { loc: [3, 4] },
              { loc: [4, 5] },
              { loc: [5, 6] },
              { loc: [6, 7] },
              { loc: [7, 8] },
              { loc: [8, 9] },
              { loc: [9, 10] },
              { loc: [10, 11] },
              { loc: [11, 12] },
              { loc: [12, 13] },
              { loc: [13, 14] },
              { loc: [14, 15] },
              { loc: [15, 16] },
              { loc: [16, 17] },
              { loc: [17, 18] },
              { loc: [18, 19] },
              { loc: [19, 20] },
            ]}
            route={{ slide: 14 }}
          />

          <CodeSlide
            lang="bash"
            transition={[]}
            code={require("raw!../assets/get-vars.example")}
            ranges={[
              { loc: [0, 20], title: "Android To Galaxy To Hockey" },
              { loc: [0, 1], note: "generate key and password" },
              { loc: [1, 2], note: "generate Galaxy auth file" },
            ]}
            route={{ slide: 15 }}
          />

          <CodeSlide
            lang="json"
            transition={[]}
            code={require("raw!../assets/android.example")}
            ranges={[
              { loc: [0, 9], title: "Android to Galaxy to Hockey" },
              { loc: [0, 1] },
              { loc: [1, 2], note: "name of the key we just generated" },
              { loc: [2, 3], note: "password for key just generated" },
              { loc: [3, 4], note: "path to android sdks on your machine" },
              { loc: [4, 5], note: "API token from Hockey" },
              { loc: [5, 6], note: "id of app on Hockey" },
              { loc: [6, 7], note: "Galaxy region to deploy to" },
              { loc: [7, 8], note: "Galaxy auth file we just generated" },
              { loc: [8, 9] },
            ]}
            route={{ slide: 16 }}
          />

          <CodeSlide
            lang="bash"
            transition={[]}
            code={require("raw!../assets/launch-android.example")}
            ranges={[
              { loc: [0, 9], title: "Android to Galaxy to Hockey" },
              { loc: [0, 1], note: "deploy to Galaxy" },
              { loc: [1, 2], note: "build app" },
              { loc: [2, 3], note: "upload and distribute through Hockey" },
            ]}
            route={{ slide: 17 }}
          />

          <Slide transition={[]} bgColor="light-primary" textColor="dark-primary">
            <Heading fit lineHeight={1} textColor="primary">
              What Else?
            </Heading>
            <Heading size={6} textFont="secondary" textColor="dark-secondary">
              <S type="italic">Automate :allthethings:!</S>
            </Heading>
            <List textFont="secondary">
              <Appear><ListItem>Launch init</ListItem></Appear>
              <Appear><ListItem>Launch build</ListItem></Appear>
              <Appear><ListItem>Launch Galaxy</ListItem></Appear>
              <Appear><ListItem>Launch Hockey</ListItem></Appear>
              <Appear><ListItem>Launch Testflight</ListItem></Appear>
              <Appear><ListItem>Launch Playstore</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgColor="primary" textColor="light-primary">
            <Heading fit caps lineHeight={1} textColor="light-primary">
              Continuous <br></br>Delivery
            </Heading>
            <Heading size={6} textFont="secondary" textColor="light-secondary">
              <S type="italic">Or, why we really built this</S>
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="light-primary" textColor="dark-primary">
            <Heading fit lineHeight={1} textColor="primary">
              Easy
            </Heading>
            <Heading size={6} textFont="secondary" textColor="dark-secondary">
              <S type="italic">Peasy?</S>
            </Heading>
            <List fit textFont="secondary">
              <Appear><ListItem>Launch runs on both Linux and OSX</ListItem></Appear>
              <Appear><ListItem>You still need OSX to build iOS</ListItem></Appear>
              <Appear><ListItem>Encrypt launch.json for Travis</ListItem></Appear>
              <Appear><ListItem>Place contents in env vars elsewhere</ListItem></Appear>
              <Appear><ListItem>All launch variables can be overriden by env vars</ListItem></Appear>
              <Appear><ListItem>^^ especially useful for Android SDKs</ListItem></Appear>
            </List>
          </Slide>

          <CodeSlide
            lang="yaml"
            transition={[]}
            code={require("raw!../assets/cd.example")}
            ranges={[
              { loc: [0, 29], title: "Steal My Config" },
              { loc: [3, 9], note: "cache some Android things" },
              { loc: [9, 14], note: "decrypt our secrets" },
              { loc: [17, 18], note: "install launch" },
              { loc: [26, 29], note: "launch the things!" },
            ]}
            route={{ slide: 21 }}
          />

          <Slide transition={[]} bgColor="light-primary" textColor="dark-primary">
            <Heading fit lineHeight={1} textColor="primary">
              Documentation
            </Heading>
            <Heading size={6} textFont="secondary" textColor="dark-secondary">
              <S type="italic">Learn you a launch for great good!</S>
            </Heading>
            <List textFont="secondary">
              <Appear><ListItem>Documentation for all launch actions at <Link href="http://newspring.github.io/meteor-launch">newspring.github.io/meteor-launch</Link></ListItem></Appear>
              <Appear><ListItem>Includes details about how to get the variables needed</ListItem></Appear>
              <Appear><ListItem>Examples exist for all actions</ListItem></Appear>
              <Appear><ListItem>Includes Travis builds</ListItem></Appear>
              <Appear><ListItem>Source code at <Link href="https://github.com/newspring/meteor-launch">newspring/meteor-launch</Link></ListItem></Appear>
              <Appear><ListItem>All PRs welcome</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgColor="light-primary" textColor="dark-primary">
            <Heading fit lineHeight={1} textColor="primary">
              How Launch Helped Us
            </Heading>
            <Heading size={6} textFont="secondary" textColor="dark-secondary">
              <S type="italic">Very halp</S>
            </Heading>
            <List textFont="secondary" lineHeight={1.4}>
              <Appear><ListItem>Our original goal was to ship 1 alpha build a week</ListItem></Appear>
              <Appear><ListItem>We have been shipping multiple alphas a day</ListItem></Appear>
              <Appear><ListItem>Anyone on our team can ship a build to alpha and beta environments through PRs and GitHub releases</ListItem></Appear>
              <Appear><ListItem>Our stakeholders are super happy</ListItem></Appear>
              <Appear><ListItem>I am super happy because deploying is the worst</ListItem></Appear>
              <Appear><ListItem>If we ship 2 builds a day, we are saving over 5 hours a week</ListItem></Appear>
              <Appear><ListItem>It takes a fraction of the time to set up launch</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgColor="primary" textColor="light-primary">
            <Heading size={4} textFont="secondary" textColor="light-secondary">
              <S type="italic">Let us check on the build</S>
            </Heading>
          </Slide>

          <Slide transition={[]} bgColor="primary" textColor="light-primary">
            <Heading fit caps lineHeight={1} textColor="light-primary">
              End
            </Heading>
            <Heading size={6} textFont="secondary" textColor="light-secondary">
              <S type="italic">Thanks</S>
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
