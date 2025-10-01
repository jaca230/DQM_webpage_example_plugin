export default function makeMyTable({ Table, SettingTypes }) {
  return class MyTable extends Table {
    static displayName = 'My Example Table';
    static name = 'MyTable';

    static get settingSchema() {
      return {
        ...super.settingSchema,
        dataUrl: {
          type: SettingTypes.STRING,
          default: 'http://localhost/api/my_table_data',
          label: 'Data URL',
          onChange: 'onUpdateTick',
        },
      };
    }

    render() {
      const rows = [['Header 1', 'Header 2'], [1, 'A'], [2, 'B']];
      return (
        <table>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };
}
