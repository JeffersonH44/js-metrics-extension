### Usage
```typescript
import {VizabiModule} from 'ng2-vizabi';
```

### Annotations
```typescript
@Directive({
  selector: 'vizabi'
})
```

### VizabiModule inputs

  * `order` (`number`) - order for this component; 1 by default
  * `additionalItems` (`?Array<any>`) - additional data for model contains additional ddf folders or csv files urls and related readers; empty by default
  * `stopUrlRedirect` (`boolean`) - prevent changing url by this component if `true`; `false` by default
  * `readerModuleObject` (`?any`) - object (separate module that contains method to get reader's object); undefined by default
  * `readerGetMethod` (`?string`) - method name (to get reader's object) in `readerModuleObject`; undefined by default
  * `readerPlugins` (`?Array<any>`) - parameters for `readerGetMethod`; undefined by default
  * `readerName` (`?string`) - reader's name; undefined by default
  * `model` (`any`) - model for current `Vizabi` instance
  * `modelHash` (`?string`) - hash (url encoded) with extra data for `model`; undefined by default
  * `extResources` (`?any`) - extResources object (see `Vizabi._globals.ext_resources`)
  * `chartType` (`string`) - chart type for current `Vizabi` instance

### VizabiModule outputs

  * `onClick` - raised during click on Vizabi's elements that contain next classes: `vzb-tool-stage`, `vzb-tool-dialogs`, `vzb-tool-buttonlist`
  * `onCreated` - raised after Vizabi chart creation
  * `onChanged` - raised when Vizabi's state was changed (for example, axis was changes or some countries was selected) or `additionalItems` (see `VizabiModule inputs`) was changed
