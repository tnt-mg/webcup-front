import { WelcomeScreen } from "@excalidraw/excalidraw"
import { useTranslation } from "react-i18next"

export const WhiteboardWelcomeScreen = (props: any) => {
  const { t } = useTranslation()
  return (
    <WelcomeScreen>
      <WelcomeScreen.Hints.MenuHint>Menu</WelcomeScreen.Hints.MenuHint>
      <WelcomeScreen.Hints.ToolbarHint />
      <WelcomeScreen.Hints.HelpHint />
      <WelcomeScreen.Center>
        {/* <WelcomeScreen.Center.Logo /> */}
        <WelcomeScreen.Center.Heading>
          {t("welcomeWhiteboard")}
        </WelcomeScreen.Center.Heading>
        {/* <WelcomeScreen.Center.Menu> */}
        {/* <WelcomeScreen.Center.MenuItemLoadScene /> */}
        {/* <WelcomeScreen.Center.MenuItemHelp /> */}
        {/* <WelcomeScreen.Center.MenuItemLiveCollaborationTrigger
          onSelect={() => props.setCollabDialogShown(true)}
        /> */}
        {/* </WelcomeScreen.Center.Menu> */}
      </WelcomeScreen.Center>
    </WelcomeScreen>
  )
}
