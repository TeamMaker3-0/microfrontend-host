// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { jsx } from "@emotion/react";
import React, { useEffect, useState, Fragment, useCallback } from "react";
import {
  Banner,
  Content,
  LeftSidebarWithoutResize,
  Main,
  PageLayout,
  RightPanel,
  TopNavigation,
} from "@atlaskit/page-layout";
import { token } from "@atlaskit/tokens";
import Button from "@atlaskit/button";
import { Inline } from "@atlaskit/primitives";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";
// import InformationIcon from "@atlaskit/icon/utility/information";
import EditorInfoIcon from '@atlaskit/icon/glyph/editor/info';
import InfoIcon from '@atlaskit/icon/glyph/info'
// import PersonAvatarIcon from "@atlaskit/icon/core/person-avatar";
import PersonIcon from '@atlaskit/icon/glyph/person'
import TeamsIcon from "@atlaskit/icon/core/teams";
// import FormIcon from "@atlaskit/icon/core/form";
import PageIcon from '@atlaskit/icon/glyph/page';

import { SlotLabel, SlotWrapper } from "../resources";

// import RegisterView from "../microfrontends/RegisterView";
import HomeView from "../microfrontends/HomeView";
import ProfileView from "../microfrontends/ProfileView";
import InformationsView from "../microfrontends/InformationsView";
import CreateCourseView from "../microfrontends/CreateCourseView";
import CaracterialView from "../microfrontends/CaracterialView";
import SocialView from "../microfrontends/SocialView";
import CourseInformationView from "../microfrontends/CourseInformationView";

// Funcion para cerrar sesion, para lo cual elimina todo elemento de local storage
// Entrada: Ninguna
// Salida: Ninguna. Se elimina todo elemento de local storage
const logOut = () => {
  const confirmacion = window.confirm(
    "¿Está seguro/a de que quiere cerrar sesión?"
  );
  if (confirmacion) {
    localStorage.clear();
    window.location.reload();
  }
  // localStorage.clear();
  // window.location.reload();
};


const EstructuraPagina: React.FC = () => {
  // Para ver un curso
  const [verCursos, setVerCursos] = useState(false);
    // Para ver una encuestaSocial
    const [verEncuestaSocial, setVerEncuestaSocial] = useState(false);

  // Obtener curso a visualizar de localStorage
  useEffect(() => {
    const verCursos = localStorage.getItem("verCursos");
    if (verCursos) {
      setVerCursos(JSON.parse(verCursos));
    }
  }, []);

    // Obtener curso a visualizar de localStorage
    useEffect(() => {
      const verEncuestaSocial = localStorage.getItem("verSocial");
      if (verEncuestaSocial) {
        setVerEncuestaSocial(JSON.parse(verEncuestaSocial));
      }
    }, []);


  // para el dialogo modal de informacion
  const [isOpenInformacion, setIsOpenInformacion] = useState(false);
  const openModalInformacion = useCallback(
    () => setIsOpenInformacion(true),
    []
  );
  const closeModalInformacion = useCallback(() => {
    setIsOpenInformacion(false);
  }, []);

  // para el dialogo modal de perfil
  const [isOpenPerfil, setIsOpenPerfil] = useState(false);
  const openModalPerfil = useCallback(() => setIsOpenPerfil(true), []);
  const closeModalPerfil = useCallback(() => {
    setIsOpenPerfil(false);
  }, []);

  // para el dialogo modal de caracterial
  const [isOpenCaracterial, setIsOpenCaracterial] = useState(false);
  const openModalCaracterial = useCallback(
    () => setIsOpenCaracterial(true),
    []
  );
  const closeModalCaracterial = useCallback(() => {
    setIsOpenCaracterial(false);
  }, []);

  return (
    <div>
      <PageLayout>
        {/** banner - header **/}
        {/** banner - header **/}
        {/** banner - header **/}
        {/** banner - header **/}
        {
          <Banner
            testId="banner"
            id="banner"
            skipLinkTitle="Banner"
            height={96}
            isFixed={false}
          >
            <SlotWrapper
              backgroundColor="#388BFF"
              borderColor={token("color.border.accent.yellow")}
            >
              <Inline>
                {/* CONTENIDO DE LA IZQUIERDA */}

                {/* IZQUIERDA: Nombre del sistema */}

                <div
                  style={{ textAlign: "left", width: "100%", height: "80px" }}
                >
                  <Inline space="space.300">
                    <img
                      src="/teammaker-logo.png"
                      alt="TeamMaker Logo"
                      style={{
                        height: "50px",
                        width: "191px",
                        marginLeft: "20px",
                        marginTop: "15px",
                        marginBottom: "15px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        localStorage.setItem(
                          "verCursos",
                          JSON.stringify(false)
                        );
                        localStorage.setItem(
                          "verSocial",
                          JSON.stringify(false)
                        );
                        window.location.reload();
                      }}
                    />
                  </Inline>
                </div>

                {/* CONTENIDO DEL MEDIO */}
                {/* <div style={{ textAlign: "center", height: "80px" }}>
                  <Button
                    appearance="primary"
                    style={{
                      marginRight: "30px",
                      marginTop: "15px",
                      width: "150px",
                      height: "50px",
                    }}
                  >
                    <p style={{ marginBottom: "0px", marginTop: "6px" }}>
                      center button
                    </p>
                  </Button>
                </div> */}

                {/* CONTENIDO DE LA DERECHA */}

                <div
                  style={{ textAlign: "right", width: "100%", height: "80px" }}
                >
                  <Button
                    appearance="primary"
                    iconAfter={<EditorInfoIcon label="Ayuda" />}
                    style={{
                      marginRight: "5px",
                      marginTop: "15px",
                      width: "135px",
                      height: "50px",
                    }}
                    onClick={openModalInformacion}
                  >
                    <p style={{ marginBottom: "0px", marginTop: "6px" }}>
                      Información
                    </p>
                  </Button>
                  {/* <Button
                      appearance="primary"
                      iconAfter={<TeamsIcon label="" />}
                      style={{
                      marginRight: "1px",
                      marginTop: "15px",
                      width: "110px",
                      height: "50px",
                      }}
                      onClick={() => {
                      navigateToCourses();
                      }}
                    >
                      <p style={{ marginBottom: "0px", marginTop: "6px" }}>
                      Cursos
                      </p>
                    </Button> */}
                  <Button
                    appearance="primary"
                    iconAfter={<PageIcon label="" />}
                    style={{
                      marginRight: "5px",
                      marginTop: "15px",
                      width: "135px",
                      height: "50px",
                    }}
                    onClick={openModalCaracterial}
                  >
                    <p style={{ marginBottom: "0px", marginTop: "6px" }}>
                      Encuestas
                    </p>
                  </Button>
                  <Button
                    appearance="primary"
                    iconAfter={<PersonIcon label="" />}
                    style={{
                      marginRight: "30px",
                      marginTop: "15px",
                      width: "135px",
                      height: "50px",
                    }}
                    onClick={() => {
                      openModalPerfil();
                    }}
                  >
                    <p style={{ marginBottom: "0px", marginTop: "6px" }}>
                      Perfil
                    </p>
                  </Button>
                  <Button
                    appearance="primary"
                    iconAfter={<SignOutIcon label="" size="large" />}
                    style={{
                      marginRight: "30px",
                      marginTop: "15px",
                      width: "135px",
                      height: "50px",
                    }}
                    onClick={() => {
                      logOut();
                    }}
                  >
                    <p style={{ marginBottom: "0px", marginTop: "6px" }}>
                      LogOut
                    </p>
                  </Button>
                </div>
              </Inline>
            </SlotWrapper>
          </Banner>
        }
        <Content testId="content">
          {/* {
            <LeftSidebarWithoutResize
              testId="leftSidebar"
              id="space-navigation"
              skipLinkTitle="Project Navigation"
              isFixed={false}
              width={125}
            >
              <SlotWrapper
                borderColor={token("color.border.accent.green")}
                hasExtraPadding
              >
                <SlotLabel isSmall>Space Navigation</SlotLabel>
              </SlotWrapper>
            </LeftSidebarWithoutResize>
          } */}
          {/****************************** main ******************************/}
          {/****************************** main ******************************/}
          {/****************************** main ******************************/}
          {/****************************** main ******************************/}
          {
            <Main testId="main" id="main" skipLinkTitle="Main Content">
              <SlotWrapper borderColor={token("color.border")} minHeight={400}>
                {/* <SlotLabel isSmall>Main Content</SlotLabel>
                <p>
                  Visit the first focusable element on the page to see the skip
                  links menu
                </p> */}
                {verCursos ? (
                  <CourseInformationView />
                  // <p>CourseInformationView</p>
                ) : verEncuestaSocial ? (
                  <SocialView />
                  // <p>SocialView</p>
                ) : (
                  <HomeView />
                  // <p>HomeView</p>
                )}
                {/* {verCursos ? <CourseInformationView /> : <HomeView />} */}
              </SlotWrapper>
            </Main>
          }
        </Content>
      </PageLayout>

      {/* ********************************************************************************************************************************************************** */}
      {/* ******************************************************************** Modal dialog para informacion ******************************************************* */}
      {/* ********************************************************************************************************************************************************** */}
      <ModalTransition>
        {isOpenInformacion && (
          <Modal
            onClose={closeModalInformacion}
            width={"x-large"}
            shouldScrollInViewport
          >
            <ModalBody>
              <InformationsView />
              {/* llamada a microfrontend */}
            </ModalBody>

            <ModalFooter>
              <Button appearance="subtle" onClick={closeModalInformacion}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>

      {/* ********************************************************************************************************************************************************** */}
      {/* ******************************************************************** Modal dialog para perfil *************************************************************** */}
      {/* ********************************************************************************************************************************************************** */}

      <ModalTransition>
        {isOpenPerfil && (
          <Modal
            onClose={closeModalPerfil}
            width={"x-large"}
            shouldScrollInViewport
          >
            <ModalHeader></ModalHeader>
            <ModalBody>
              <ProfileView />
              {/* llamada a microfrontend */}
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={closeModalPerfil}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>

      {/* ********************************************************************************************************************************************************** */}
      {/* ******************************************************************** Modal dialog para Caracterial *************************************************************** */}
      {/* ********************************************************************************************************************************************************** */}

      <ModalTransition>
        {isOpenCaracterial && (
          <Modal
            onClose={closeModalCaracterial}
            width={"x-large"}
            shouldScrollInViewport
          >
            <ModalHeader></ModalHeader>
            <ModalBody>
              {/* llamada a microfrontend */}
              {/* <p>CaracterialView</p> */}
              <CaracterialView />
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={closeModalCaracterial}>
                Cerrar
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </div>
  );
};

export default EstructuraPagina;
