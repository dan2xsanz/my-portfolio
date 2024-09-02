import "./label.css";

export enum LabelSize {
  PAGE_TITLE_BOLD,
  DEFAULT_ITALIC,
  DIV_TITLE_BOLD,
  LARGE_BOLD,
  LARGE,
  MEDIUM,
  DEFAULT,
  SMALL,
}

interface LabelInterface {
  labelSize: LabelSize;
  labelText: string;
}

export const Label = (props: LabelInterface) => {
  const { labelSize, labelText } = props;

  switch (labelSize) {
    case LabelSize.PAGE_TITLE_BOLD: {
      return <label className="label-page-title-bold-style">{labelText}</label>;
    }
    case LabelSize.DIV_TITLE_BOLD: {
      return <label className="label-div-title-bold-style">{labelText}</label>;
    }
    case LabelSize.DEFAULT: {
      return <label className="label-default-style">{labelText}</label>;
    }
    case LabelSize.DEFAULT_ITALIC: {
      return <label className="label-default-style italic">{labelText}</label>;
    }
    case LabelSize.LARGE_BOLD: {
      return <label className="label-large-bold-style">{labelText}</label>;
    }
    case LabelSize.LARGE: {
      return <label className="label-large-style">{labelText}</label>;
    }
    case LabelSize.MEDIUM: {
      return <label className="label-medium-style">{labelText}</label>;
    }
    case LabelSize.SMALL: {
      return <label className="label-small-style">{labelText}</label>;
    }
  }
};
