import * as React from "react";

export interface ProjectItemProps {
  projectName: string;
}

export interface ProjectItemState {}

export default class ProjectItem extends React.Component<
  ProjectItemProps,
  ProjectItemState
> {
  constructor(props: ProjectItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className="projectItem">{this.props.projectName}</div>;
  }
}
