/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <img
            src={`${baseUrl}img/favicon.png`}
            style={{ width: "10vw", height: "auto" }}
          />
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <p>
            Bonjour à tous et bienvenue dans ce nouveau cours portant sur
            l’algorithmie.
          </p>
          <p>
            Dans ce cours vous allez apprendre à utiliser des outils qui vous
            permettront de décrire vos algorithmes préférés. Plus précisément,
            les organigrammes et le pseudo-code seront de la partie. Une
            initiation à la programmation sera aussi à votre disposition au fil
            de ce module.
          </p>
          <p style={{ fontWeight: "bold" }}>
            Voici une vidéo d'introduction sur notre projet :
          </p>
          <a
            style={{
              width: "50vw",
              height: "auto"
            }}
            href="https://www.youtube.com/watch?v=KCYEiF6r44U"
            target="_blank"
          >
            <img
              src="http://i3.ytimg.com/vi/KCYEiF6r44U/maxresdefault.jpg"
              style={{
                width: "50vw",
                height: "auto",
                margin: "20px"
              }}
            />
          </a>
          <PromoSection>
            <Button href={docUrl("algo.html")}>C'est parti !</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const Resources = () => (
      <Block id="try" align="right">
        {[
          {
            content:
              "Sur ce site, vous trouverez des vidéos d’explications du cours, des exercices corrigés et différentes ressources externes comme des vidéos youtube ou des sites web utiles. N’hésitez pas à vous entraîner plusieurs fois sur les exercices du site « Algorithm-Learning » afin d’être prêt pour le quizz qui se fera sur Brightspace. Bon courage et on vous souhaite d’apprendre plein de choses !",
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: "left",
            title: "Des ressources pour vous aider!"
          }
        ]}
      </Block>
    );

    const Responsive = () => (
      <Block background="dark" align="left">
        {[
          {
            content:
              "Liens des plateformes : \n\n Brightspace : https://testdevinci.brightspace.com/d2l/home/15827 \n\n Algorithm-Learning : https://algorithm-learning.netlify.com/ \n\n Contact ESILV : sonia.djebali@devinci.fr \n\n Plateforme “Algorithm-Learning” réalisée avec ❤️ par les A4 : Alexandre ZAJAC, Léa YOUSSEF, Fanny ZHONG, Alban STEFF, Nicolas TOMAZO, Aron Szucs, Ariel TEDGUI, Tiphaine COLLOT et notre élève norvégien préféré Stian TEIEN.",
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: "right",
            title: "Accessible partout!"
          }
        ]}
      </Block>
    );

    const Recap = () => (
      <Block background="light" align="left">
        {[
          {
            content:
              "Pour évoluer dans les meilleures conditions, des élèves de 4ème année à l’ESILV vous ont concocté deux plateformes d’apprentissage qui seront là pour vous aider tout au long du module. La première, c’est Brightspace, que vous utiliserez régulièrement pour tous les cours à l’ESILV et qui vous permet d’accéder aux fichiers de cours et de faire vos quizz de cours qui seront potentiellement notés. Pour vous préparez au mieux à ces quizz, la plateforme d’apprentissage, mise en place par les étudiants d’A4 vous permettra de mieux comprendre chaque notion. Ainsi, avant de réaliser chaque quizz, vous devrez au préalable lire le contenu des différentes pages du site « Algorithm-Learning » pour être sûr d’avoir bien compris chaque notion présentée dans le cours.",
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: "right",
            title: "N'oubliez plus vos fondamentaux!"
          }
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: "This is the content of my feature",
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: "top",
            title: "Feature One"
          },
          {
            content: "The content of my second feature",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: "top",
            title: "Feature Two"
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div>
          <Recap />
          <Resources />
          <Responsive />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
