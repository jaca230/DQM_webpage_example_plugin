export default function makeMyPlot({ Plot, SettingTypes }) {
  return class MyPlot extends Plot {
    static displayName = 'My Example Plot';
    static name = 'MyPlot';

    static get settingSchema() {
      return {
        ...super.settingSchema,
        dataUrl: {
          type: SettingTypes.STRING,
          default: 'http://localhost/api/my_data',
          label: 'Data URL',
          onChange: 'onUpdateTick',
        },
      };
    }

    initPlot(json) {
      return {
        data: [{
          x: json.time || [],
          y: json.value || [],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        }],
        layout: { title: 'My Example Plot' },
      };
    }

    updatePlot(json) {
      return {
        data: [{
          x: json.time || [],
          y: json.value || [],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        }],
        layout: undefined, // keep layout unchanged
      };
    }
  };
}
