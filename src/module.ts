import { AppPagePlugin } from '@velaux/data';
import { App } from './components/App';
import { PluginConfig } from './components/PluginConfig';

export const plugin = new AppPagePlugin<{}>().setRootPage(App).addConfigPage({
  title: 'Configuration',
  icon: 'cog',
  body: PluginConfig,
  id: 'configuration',
});
