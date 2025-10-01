import makeMyPlot from './figures/MyPlot.jsx';
import makeMyTable from './figures/MyTable.jsx';
import makeMyLabel from './figures/MyLabel.jsx';

function registerFigures({ registry, baseClasses }) {
  const { Plot, Table, BaseFigure, SettingTypes } = baseClasses;

  registry.register('MyPlot', makeMyPlot({ Plot, SettingTypes }));
  registry.register('MyTable', makeMyTable({ Table, SettingTypes }));
  registry.register('MyLabel', makeMyLabel({ BaseFigure, SettingTypes }));
}

export default registerFigures;

// Expose globally for eval/script loading
if (typeof window !== 'undefined') {
  window.PluginRegister = registerFigures;
}
