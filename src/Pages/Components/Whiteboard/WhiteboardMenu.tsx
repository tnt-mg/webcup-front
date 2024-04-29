import { MainMenu } from "@excalidraw/excalidraw"

export const WhiteboardMenu = (props: any) => {
  return (
    <MainMenu>
      <MainMenu.DefaultItems.LoadScene />
      <MainMenu.DefaultItems.SaveToActiveFile />
      <MainMenu.DefaultItems.Export />
      <MainMenu.DefaultItems.SaveAsImage />
      {/* <MainMenu.DefaultItems.LiveCollaborationTrigger
      isCollaborating={props.isCollaborating}
      onSelect={() => props.setCollabDialogShown(true)}
    /> */}

      <MainMenu.DefaultItems.ClearCanvas />
      <MainMenu.Separator />
      {/* <MainMenu.ItemCustom>
      <LanguageList style={{ width: "100%" }} />
    </MainMenu.ItemCustom> */}
      <MainMenu.DefaultItems.ChangeCanvasBackground />
    </MainMenu>
  )
}
