import { BlockCatalogue } from '@avocadostudio-ai/blocks';
import '@avocadostudio-ai/blocks/styles.css';

// Mounted with client:only="react" — the catalogue is an interactive playground
// with editable props, so there is nothing useful to prerender.
export default function ComponentsCatalogue() {
  return <BlockCatalogue />;
}
