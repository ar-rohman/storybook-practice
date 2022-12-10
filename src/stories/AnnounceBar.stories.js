import AnnounceBar from "../components/AnnounceBar";

const stories = {
  title: "AnnounceBar",
  component: AnnounceBar,
}

export default stories;

const TemplateStory = (args) => <AnnounceBar {...args} />

export const WithTypeSuccess = TemplateStory.bind({})

WithTypeSuccess.args ={
  title: "Success",
  content: "This is a success message",
  ctaLabel: "Click me",
  type: "success"
}

export const WithTypeError = TemplateStory.bind({})

WithTypeError.args ={
  title: "Error",
  content: "This is a error message",
  ctaLabel: "Click me",
  type: "error"
}

export const WithTypeWarning = TemplateStory.bind({})

WithTypeWarning.args ={
  title: "Warning",
  content: "This is a warning message",
  ctaLabel: "Click me",
  type: "warning"
}