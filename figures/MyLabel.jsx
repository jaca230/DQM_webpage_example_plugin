export default function makeMyLabel({ BaseFigure, SettingTypes }) {
  return class MyLabel extends BaseFigure {
    static displayName = 'My Example Label';
    static name = 'MyLabel';

    static get settingSchema() {
      return {
        text: {
          type: SettingTypes.STRING,
          default: 'Hello, world!',
          label: 'Label Text',
        },
      };
    }

    render() {
      return <div>{this.settings.text}</div>;
    }
  };
}
