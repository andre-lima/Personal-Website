import * as React from "react";

export interface SkillItemProps {
  skillName: string;
}

export interface SkillItemState {}

export default class SkillItem extends React.Component<
  SkillItemProps,
  SkillItemState
> {
  constructor(props: SkillItemProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div className="skillItem">{this.props.skillName}</div>;
  }
}
