# 3.4.4

> 2018-12-06

* **Improve**: Refactor the animations Bounce and Slide ([#288])
* **Improve**: The active state is Displayed when the Picker is expanded ([#299])
* **Improve**: Add a title to a multi-picker ([#298])
* **Improve**: Picker clears the search input when it is cloed ([#301])
* **Bugfix**: Update progress bar when the `<Uploader>` is controlled ([#300])
* **Bugfix**: Fixed issue with active date item in month panel ([#295])
* **Bugfix**: Fixed selectNode null exception in `<MultiCascader>` ([#293])
* **Bugfix**: Fixed checkForField API in `<Form>` is invalid ([#289])
* **Chore**: Update flow type definition ([#294],[#295],[#296])

[#301]: https://github.com/rsuite/rsuite/pull/301
[#300]: https://github.com/rsuite/rsuite/pull/300
[#299]: https://github.com/rsuite/rsuite/pull/299
[#298]: https://github.com/rsuite/rsuite/pull/298
[#296]: https://github.com/rsuite/rsuite/pull/296
[#295]: https://github.com/rsuite/rsuite/pull/295
[#294]: https://github.com/rsuite/rsuite/pull/294
[#293]: https://github.com/rsuite/rsuite/pull/293
[#289]: https://github.com/rsuite/rsuite/pull/289
[#288]: https://github.com/rsuite/rsuite/pull/288

# 3.4.3

> 2018-11-22

* **Feature**: Support `uncheckableItemValues` on `<CheckTreePicker>` ([#284])
* **Bugfix**: The `Picker` menu should update the position after the height has changed ([#282])
* **Bugfix**: Fixed the `<Uploader>` component retry button styles ([#280])
* **Bugfix**: Fixed the problem that cursor is default pointer when mouse over the `<TagPicker>` ([#279])
* **Bugfix**: Fixed bugs in IE10 browser ([#277])
* **Bugfix**: The Drawer will trigger onHide when clicking inside the Drawer ([#273])
* **Improve**: Improve the way that tree related components are updated asynchronously ([#287])
* **Improve**: Improve FormControl to avoid unnecessary rendering ([#276]) @zpbc007
* **Improve**: Adjust the default font family ([#275])
* **Improve**: Improve TypeScript type definitions ([#262],[#264],[#267],[#270],[#270],[#274]) @zpbc007

[#287]: https://github.com/rsuite/rsuite/pull/287
[#284]: https://github.com/rsuite/rsuite/pull/284
[#282]: https://github.com/rsuite/rsuite/pull/282
[#280]: https://github.com/rsuite/rsuite/pull/280
[#279]: https://github.com/rsuite/rsuite/pull/279
[#277]: https://github.com/rsuite/rsuite/pull/277
[#276]: https://github.com/rsuite/rsuite/pull/276
[#275]: https://github.com/rsuite/rsuite/pull/275
[#274]: https://github.com/rsuite/rsuite/pull/274
[#273]: https://github.com/rsuite/rsuite/pull/273
[#271]: https://github.com/rsuite/rsuite/pull/271
[#270]: https://github.com/rsuite/rsuite/pull/270
[#267]: https://github.com/rsuite/rsuite/pull/267
[#264]: https://github.com/rsuite/rsuite/pull/264
[#262]: https://github.com/rsuite/rsuite/pull/262

# 3.4.2

> 2018-11-15

* **Feature**: Support `rowClassName` on `<Table>` ([#table-45])
* **Feature**: Support `defaultSortType` on `<Table>` and let `sortType` be controlled ([#table-43])
* **Feature**: Added public API `start` on `<Uploader>` for manual upload ([#255])
* **Feature**: Improve the interactive experience of `<MultiCascader>`, `<CheckTreePicker>`, and `<CheckPicker>` ([#259])
* **Refactor**: Used new contextType API in `<Form>` ([#256])
* **Bugfix**: The height of `body` should be reset when the content in `<Modal>` is updated ([#260])
* **Bugfix**: Fix `<InputPicker>` The keyboard return event cannot select the new option ([#254])
* **Bugfix**: Fix the problem that `<Tooltip>` without arrow ([#253])
* **Bugfix**: Fix the problem that property `fixedWith` of `<Icon>` is invalid ([#252])
* **Bugfix**: Fix `<CheckTree>` to determine the problem with node state ([#251])
* **Bugfix**: Fix typescript type check error ([#249])

[#260]: https://github.com/rsuite/rsuite/pull/260
[#259]: https://github.com/rsuite/rsuite/pull/259
[#256]: https://github.com/rsuite/rsuite/pull/256
[#255]: https://github.com/rsuite/rsuite/pull/255
[#254]: https://github.com/rsuite/rsuite/pull/254
[#253]: https://github.com/rsuite/rsuite/pull/253
[#252]: https://github.com/rsuite/rsuite/pull/252
[#251]: https://github.com/rsuite/rsuite/pull/251
[#249]: https://github.com/rsuite/rsuite/pull/249
[#table-45]: https://github.com/rsuite/rsuite-table/pull/45
[#table-43]: https://github.com/rsuite/rsuite-table/pull/43

# 3.4.1

> 2018-11-01

* **Bugfix**: Fix typos in Slider ([#246])
* **Bugfix**: Fix typescript type definition error ([#245])

[#246]: https://github.com/rsuite/rsuite/pull/246
[#245]: https://github.com/rsuite/rsuite/pull/245

# 3.4.0

> 2018-11-01

* **Feature**: Support [`Typescript`](https://www.typescriptlang.org/) ([#241])
* **Feature**: Add [`<MultiCascader>`](https://rsuitejs.com/en/components/multi-cascader) ([#238])
* **Feature**: Support `renderTooltip` on `<Slider>` ([#239])
* **Bugfix**: The scroll bar is not reset after the column of the `<Table>` has changed ([#244])
* **Bugfix**: The option value of `<InputPicker>` does not exist or is disabled and cannot be selected ([#243])
* **Bugfix**: Cannot customize options in `<DatePicker>` shortcuts ([#242])
* **Bugfix**: Fix cannot preview images in `fileList` on `<Uploader>` ([#237])
* **Bugfix**: `<FormControl>` updates error information from the context of the `<Form>` by default ([#236])
* **Bugfix**: Resolve the problem that icon exception when modularity ([#233])

[#244]: https://github.com/rsuite/rsuite/pull/244
[#243]: https://github.com/rsuite/rsuite/pull/243
[#242]: https://github.com/rsuite/rsuite/pull/242
[#241]: https://github.com/rsuite/rsuite/pull/241
[#239]: https://github.com/rsuite/rsuite/pull/239
[#238]: https://github.com/rsuite/rsuite/pull/238
[#237]: https://github.com/rsuite/rsuite/pull/237
[#236]: https://github.com/rsuite/rsuite/pull/236
[#233]: https://github.com/rsuite/rsuite/pull/233

# 3.3.1

> 2018-10-18

* **Feature**: Support `sticky` on `<CheckPicker>`, top the selected options in the options. ([#226])
* **Feature**: Support `ellipsis` and `boundaryLinks` on `<TablePagination>` ([#221])
* **Bugfix**: Fixed an issue where the input group was set inside and there were two addons. ([#227])
* **Bugfix**: `sideEffects: false` cause css file not bundled ([#222])
* **Bugfix**: Fixed a parameter error in the `onOpenChange` function when the `<Sidenav>` component was being controlled ([#221])
* **Bugfix**: Display a message when there is no option on the Picker ([#232])
* **Improve**: Optimize the experience of the resize spanner on `<Table>`. ([#229],[#230])

[#232]: https://github.com/rsuite/rsuite/pull/232
[#230]: https://github.com/rsuite/rsuite/pull/230
[#229]: https://github.com/rsuite/rsuite/pull/229
[#227]: https://github.com/rsuite/rsuite/pull/227
[#226]: https://github.com/rsuite/rsuite/pull/226
[#223]: https://github.com/rsuite/rsuite/pull/223
[#222]: https://github.com/rsuite/rsuite/pull/222
[#221]: https://github.com/rsuite/rsuite/pull/221

# 3.3.0

> 2018-09-28

* **Feature**: Add `<IconStack>` ([#219])
* **Feature**: Support for global configuration of the className prefix ([#214])
* **Bugfix**: Focus does not return to the input box on `<TagPicker>` when you click the option ([#218])
* **Bugfix**: Change `<Modal>` backdrop and `<Drawer>` backdrop zindex ([#217])
* **Bugfix**: Clicking when `<Dropdown>` is disabled still triggers ripple animation and the cursor is the default ([#215])
* **Chore**: Change browserslist IE supported to IE10+ ([#216])
* **Chore**: Remove dropdown disabled styles to dropdown.less ([#215])
* **Chore**: Update to babel 7 ([#211])

[#219]: https://github.com/rsuite/rsuite/pull/219
[#218]: https://github.com/rsuite/rsuite/pull/218
[#217]: https://github.com/rsuite/rsuite/pull/217
[#216]: https://github.com/rsuite/rsuite/pull/216
[#215]: https://github.com/rsuite/rsuite/pull/215
[#214]: https://github.com/rsuite/rsuite/pull/214
[#211]: https://github.com/rsuite/rsuite/pull/211

# 3.2.11

> 2018-09-21

* **Feature**: International support for Portuguese ([#208])
* **Bugfix**: Fixed an exception when using `<Modal>`, `<Drawer>` in modular ([#209])
* **Bugfix**: Remove the deep clone from the filterNodesOfTree function ([#206])
* **Bugfix**: Problem with the first-level menu icon blinking when the sidebar is closed ([#205])

[#209]: https://github.com/rsuite/rsuite/pull/209
[#208]: https://github.com/rsuite/rsuite/pull/208
[#206]: https://github.com/rsuite/rsuite/pull/206
[#205]: https://github.com/rsuite/rsuite/pull/205

# 3.2.10

> 2018-09-14

* **Bugfix**: Uploader size info in IE is abnormality. ([#203])
* **Bugfix**: The `DateRangePicker` end date is a problem that flashes wildly as the mouse moves ([#202])
* **Bugfix**: In safari, after multiple clicks , the loader still has not disappeared on `<Table>` ([#201])
* **Bugfix**: The loader on `<Table>` should be above the scrollbar ([#201])
* **Chore**: Compress lodash ([#200])
* **Chore**: Change icon font CDN path ([#199])

[#203]: https://github.com/rsuite/rsuite/pull/203
[#202]: https://github.com/rsuite/rsuite/pull/202
[#201]: https://github.com/rsuite/rsuite/pull/201
[#200]: https://github.com/rsuite/rsuite/pull/200
[#199]: https://github.com/rsuite/rsuite/pull/199

# 3.2.9

> 2018-09-05

* **Feature**: Support combine in Schema ([#195])
* **Feature**: Support `onHide` on Picker ([#194])
* **Feature**: Support `checkForField` in `<Form>` ([#193])
* **Feature**: Support `disabled` on `<Pagination>` ([#189])
* **Bugfix**: Calender is not updated when the value is updated ([#192])
* **Bugfix**: Fix not updated after updating the value in `<Cascader>` ([#188])

[#195]: https://github.com/rsuite/rsuite/pull/195
[#194]: https://github.com/rsuite/rsuite/pull/194
[#193]: https://github.com/rsuite/rsuite/pull/193
[#192]: https://github.com/rsuite/rsuite/pull/192
[#189]: https://github.com/rsuite/rsuite/pull/189
[#188]: https://github.com/rsuite/rsuite/pull/188

# 3.2.8

> 2018-08-30

* **Feature**: Support for return all data in `Schema.Types.addRule` ([#186])
* **Feature**: Replaced and created some icons. ([#185])
* **Bugfix**: Remove minimum with limit for menu of picker menu. ([#182])
* **Bugfix**: The default value of `sortType` on `<Table>` should be `desc`. ([#180])
* **Bugfix**: Backdrop set to `static` invalid on `<Drawer>`. ([#179])
* **Bugfix**: Fix `disabeldDate` callback parameter error on `<DateRangePicker>`. ([#178])
* **Chore**: Remove duplicate ripple DOM. ([#183])
* **Chore**: Reformat code style with prettier. ([#184])

[#186]: https://github.com/rsuite/rsuite/pull/186
[#185]: https://github.com/rsuite/rsuite/pull/185
[#184]: https://github.com/rsuite/rsuite/pull/184
[#183]: https://github.com/rsuite/rsuite/pull/183
[#182]: https://github.com/rsuite/rsuite/pull/182
[#180]: https://github.com/rsuite/rsuite/pull/180
[#179]: https://github.com/rsuite/rsuite/pull/179
[#178]: https://github.com/rsuite/rsuite/pull/178

# 3.2.7

> 2018-08-23

* **Bugfix**: The `flexGrow` is invalid when there is only one column on `<Table>` ([#177])
* **Bugfix**: `<Modal>` and `<Drawer>` have no animation problems when modular. ([#176])
* **Bugfix**: `<TreePicker>` miss active className ([#174])
* **Bugfix**: An error occurred in the `null` value when the `DatePicker` was controlled. ([#172])

[#177]: https://github.com/rsuite/rsuite/pull/177
[#176]: https://github.com/rsuite/rsuite/pull/176
[#174]: https://github.com/rsuite/rsuite/pull/174
[#172]: https://github.com/rsuite/rsuite/pull/172

# 3.2.6

> 2018-08-16

* **Feature**: Support `onResize` on `<Table.Column>` ([#table-37])
* **Bugfix**: Add className and style props for Tree and CheckTree
* **Bugfix**: The scrollbar position is reset when the data is loaded ([#table-36])
* **Bugfix**: Tree has a scroll bar that should not be there ([#169])
* **Chore**: Refactor the `<InputAutosize>` component in `<TagPicker>` ([#167])
* **Chore**: [flow-typed] Add rsuite v3 libdef ([#flow-typed-2547])

[#170]: https://github.com/rsuite/rsuite/pull/170
[#169]: https://github.com/rsuite/rsuite/pull/169
[#167]: https://github.com/rsuite/rsuite/pull/167
[#table-37]: https://github.com/rsuite/rsuite-table/pull/37
[#table-36]: https://github.com/rsuite/rsuite-table/pull/36
[#flow-typed-2547]: https://github.com/flow-typed/flow-typed/pull/2547

# 3.2.5

> 2018-08-10

* **Bugfix**: Fix click NavItem no response in Firefox.

# 3.2.4

> 2018-08-10

* **Feature**: Improve of ripple animation effects ([#154])
* **Bugfix**: Tab nav active styles abnormal ([#156])
* **Chore**: Migrated to new lifecycle method ([#157],[#158],[#159],[#161],[#164])
* **Chore**: Compatibility with the post-css autoprefixer ([#155])

[#164]: https://github.com/rsuite/rsuite/pull/164
[#161]: https://github.com/rsuite/rsuite/pull/161
[#159]: https://github.com/rsuite/rsuite/pull/159
[#158]: https://github.com/rsuite/rsuite/pull/158
[#157]: https://github.com/rsuite/rsuite/pull/157
[#156]: https://github.com/rsuite/rsuite/pull/156
[#155]: https://github.com/rsuite/rsuite/pull/155
[#154]: https://github.com/rsuite/rsuite/pull/154

# 3.2.3

> 2018-08-02

* **Bugfix**: Fixed `<CheckTree>` label horizontal padding ([#151])
* **Bugfix**: Fixed `<Button>` unusual styles when setting the size of the button group ([#149])
* **Chore**: Update flow-typed ([#150])

[#151]: https://github.com/rsuite/rsuite/pull/151
[#150]: https://github.com/rsuite/rsuite/pull/150
[#149]: https://github.com/rsuite/rsuite/pull/149

# 3.2.2

> 2018-07-26

Add a sample site: https://sample.rsuitejs.com/

* **Feature**: Support `placeholder` on `<InputNumber>` ([#140])
* **Breaking**: Remove unused `defaultActiveKey` on `<Sidenav>` ([#143])
* **Bugfix**: Fixed an issue where the input box was not centered when the form was vertical aligned ([#148])
* **Bugfix**: Set backgroud color to table. ([#146])
* **Bugfix**: `<Button>` is missing border-radius in `<ButtonGroup>` ([#145])
* **Bugfix**: The option value error when current keyboard operation option on `<TagPicker>` ([#142])
* **Bugfix**: The callback for `disableDate` is incorrect on `<DateRangePicker>` ([#138])
* **Chore**: Add `sideEffects: false` for Webpack 4 ([#144])
* **Chore**: filter the ref value of `null` for `tableRows` ([#table-33])

[#148]: https://github.com/rsuite/rsuite/pull/148
[#146]: https://github.com/rsuite/rsuite/pull/146
[#145]: https://github.com/rsuite/rsuite/pull/145
[#144]: https://github.com/rsuite/rsuite/pull/144
[#143]: https://github.com/rsuite/rsuite/pull/143
[#142]: https://github.com/rsuite/rsuite/pull/142
[#140]: https://github.com/rsuite/rsuite/pull/140
[#139]: https://github.com/rsuite/rsuite/pull/139
[#138]: https://github.com/rsuite/rsuite/pull/138
[#table-33]: https://github.com/rsuite/rsuite-table/pull/33

# 3.2.1

> 2018-07-19

* **Feature**: Support `menuStyle` on `<TreePicker>` and `<CheckTreePicker>` ([#136])
* **Bugfix**: Fix the color of pickers placeholders ([#137])
* **Bugfix**: Fix `<TreePicker>` and `<CheckTreePicker>` keydown event error ([#135])
* **Bugfix**: Table in the page picker should be subtle ([#134])
* **Chore**: The callback function returns detailed info on `<Uploader>` ([#133])

[#137]: https://github.com/rsuite/rsuite/pull/137
[#136]: https://github.com/rsuite/rsuite/pull/136
[#135]: https://github.com/rsuite/rsuite/pull/135
[#134]: https://github.com/rsuite/rsuite/pull/134
[#133]: https://github.com/rsuite/rsuite/pull/133

# 3.2.0

> 2018-07-12

* **Feature/Breaking**: Support `appearance` on `*Picker`, The default value is `default` ([#125])
* **Feature**: Added InputPicker component ([#129])
* **Feature**: Added TagPicker component ([#129])
* **Bugfix**: Calendar render incomplete when set `isoWeek` ([#128])
* **Bugfix**: Table loading unclickable ([#124])
* **Chore**: Migrate code for picker related components to `rsuite` library

[#129]: https://github.com/rsuite/rsuite/pull/129
[#128]: https://github.com/rsuite/rsuite/pull/128
[#125]: https://github.com/rsuite/rsuite/pull/125
[#124]: https://github.com/rsuite/rsuite/pull/124

# 3.1.3

> 2018-07-05

* **Feature**: Support `disabled` on `<InputGroup>` ([#117])
* **Feature**: Support `showHeader` on `<Table>` ([#table-30])
* **Feature**: Support `autoHeight` and `minHeight` on `<Table>` ([#table-29])
* **Feature**: Support `cellBordered` on `<Table>` ([#table-28])
* **Chore**: Unhandled props are passed to the DropdownToggle ([#119])
* **Bugfix**: Fixed `<Checkbox>` and `<Radio>` clickable area ([#120])
* **Bugfix**: `<Loader>` don't spin in Safari ([#121])

[#121]: https://github.com/rsuite/rsuite/pull/121
[#120]: https://github.com/rsuite/rsuite/pull/120
[#119]: https://github.com/rsuite/rsuite/pull/119
[#117]: https://github.com/rsuite/rsuite/pull/117
[#table-30]: https://github.com/rsuite/rsuite-table/pull/30
[#table-29]: https://github.com/rsuite/rsuite-table/pull/29
[#table-28]: https://github.com/rsuite/rsuite-table/pull/28

# 3.1.2

> 2018-06-28

* **Feature**: Support `expandAll` on `<TreePicker>` and `CheckTreePicker` ([#112])
* **Feature**: Support `searchKeyword` on `<TreePicker>` and `CheckTreePicker` ([#112])
* **Feature**: Support `autoVertical` and `autoHorizontal` for `placement` value on `<Popover>` and `<Tooltip>` ([#107])
* **Feature**: Support `disabledFileItem` on `<Uploader>` ([#101])
* **Feature**: Support `toggleComponentClass` on `<Uploader>` ([#104])
* **Feature**: Support `loadAnimation` on `<Table>` ([#table-27])
* **Feature**: Support for `<InputGroup>` nesting `<InputNumber>` ([#96])
* **Feature**: Support `noCaret` and `toggleComponentClass` on `<Dropdown>` ([#92])
* **Bugfix**: Select the same file without triggering the `onChange` event in `<Uploader>` ([#102])
* **Bugfix**: `<TreePicker>` error when comparing values ([#100])
* **Bugfix**: The position was updated incorrectly when the scrollbar was clicked on `<Table>` ([#table-26])
* **Bugfix**: Increase z-index when drawer opened ([#95])
* **Bugfix**: `<InputNumber>` should not set the default value ([#93])
* **Bugfix**: Set minimum height for table body ([#table-24])
* **Chore**: Improve picker selected styles ([#109])
* **Chore**: Added transition for table loader. ([#108])
* **Chore**: Handle `<InputNumber>` combination styles ([#106])
* **Chore**: Button in `<InputNumber>`, defaults to the subtle button ([#99])
* **Chore**: Keep loader backdrop-color with table loader ([#96])
* **Chore**: remove all animation for tree to optimal performance ([#94])
* **Chore**: Allowed table header height can be 0 ([#table-25])
* **Chore**: Update style for table load ([#table-25])

[#112]: https://github.com/rsuite/rsuite/pull/112
[#109]: https://github.com/rsuite/rsuite/pull/109
[#108]: https://github.com/rsuite/rsuite/pull/108
[#107]: https://github.com/rsuite/rsuite/pull/107
[#106]: https://github.com/rsuite/rsuite/pull/106
[#104]: https://github.com/rsuite/rsuite/pull/104
[#102]: https://github.com/rsuite/rsuite/pull/102
[#101]: https://github.com/rsuite/rsuite/pull/101
[#100]: https://github.com/rsuite/rsuite/pull/100
[#99]: https://github.com/rsuite/rsuite/pull/99
[#96]: https://github.com/rsuite/rsuite/pull/96
[#95]: https://github.com/rsuite/rsuite/pull/96
[#95]: https://github.com/rsuite/rsuite/pull/95
[#94]: https://github.com/rsuite/rsuite/pull/94
[#93]: https://github.com/rsuite/rsuite/pull/93
[#92]: https://github.com/rsuite/rsuite/pull/92
[#table-27]: https://github.com/rsuite/rsuite-table/pull/27
[#table-26]: https://github.com/rsuite/rsuite-table/pull/26
[#table-25]: https://github.com/rsuite/rsuite-table/pull/25
[#table-24]: https://github.com/rsuite/rsuite-table/pull/24

# 3.1.1

> 2018-06-21

* **Bugfix**: Unity picker style when select values. ([#91],[#issues-61])
* **Bugfix**: Adjust sidenav dropdown padding ([#90])
* **Feature**: Support `bordered` on `<Table>` ([#89])
* **Feature**: Support `onOpen` and `onClose` on `<Whisper>` ([#87])
* **Chore**: Update createChainedFunction [#86]
* **Chore**: Remove dropdown&picker open animations ([#85])
* **Bugfix**: Clear popover margin-top when it is full ([#84])
* **Chore**: Change the `depth equal` to the `shallow equal` for all pickers ([#83], [#88])

[#91]: https://github.com/rsuite/rsuite/pull/91
[#90]: https://github.com/rsuite/rsuite/pull/90
[#89]: https://github.com/rsuite/rsuite/pull/89
[#88]: https://github.com/rsuite/rsuite/pull/88
[#87]: https://github.com/rsuite/rsuite/pull/87
[#86]: https://github.com/rsuite/rsuite/pull/86
[#85]: https://github.com/rsuite/rsuite/pull/85
[#84]: https://github.com/rsuite/rsuite/pull/84
[#83]: https://github.com/rsuite/rsuite/pull/83
[#issues-61]: https://github.com/rsuite/rsuite/issues/61

# 3.1.0 🎉

> 2018-06-14

* **Feature**: Support for style modularized ([#76], [#81])
* **Feature**: Support `bodyRef` on `<Table>` ([#TABLE-23])
* **Bugfix**: The `<FormControl>` loses focus and the validated value is incorrect. ([#79])
* **Bugfix**: Fix some style problems ([#78])
* **Bugfix**: TreeNode title property display error on `<TreePicker>` ([#77])
* **Bugfix**: Remove popover/tooltip open animation delay ([#73])
* **Bugfix**: Bugfix: When the height of the content is updated, reset the scroll bar position ([#TABLE-22])
* **Bugfix**: `<AutoComplete>` cannot enter Chinese in controlled condition ([#70])

[#81]: https://github.com/rsuite/rsuite/pull/81
[#79]: https://github.com/rsuite/rsuite/pull/79
[#78]: https://github.com/rsuite/rsuite/pull/78
[#77]: https://github.com/rsuite/rsuite/pull/77
[#76]: https://github.com/rsuite/rsuite/pull/76
[#73]: https://github.com/rsuite/rsuite/pull/73
[#70]: https://github.com/rsuite/rsuite/pull/70
[#table-22]: https://github.com/rsuite/rsuite-table/pull/22
[#table-23]: https://github.com/rsuite/rsuite-table/pull/23

# 3.0.8

> 2018-06-07

* **Feature**: The position of the overlay can be adjusted automatically ([#69])
* **Bugfix**: The default type of `<Button>` is `button` ([#67])
* **Bugfix**: `<textarea>` in form-control will produce a whitesapce ([#65])
* **Feature**: Support `selectOnEnter` on `<AutoComplete>` ([#62])
* **Bugfix**: Fix the problem on the Picker style ([#58])
* **Feature**: Support `maxPreviewFileSize` on `<Uploader>` ([#57])
* **Bugfix**: dialogDOM is null ([#56])

[#69]: https://github.com/rsuite/rsuite/pull/69
[#67]: https://github.com/rsuite/rsuite/pull/67
[#65]: https://github.com/rsuite/rsuite/pull/65
[#62]: https://github.com/rsuite/rsuite/pull/62
[#58]: https://github.com/rsuite/rsuite/pull/58
[#57]: https://github.com/rsuite/rsuite/pull/57
[#56]: https://github.com/rsuite/rsuite/pull/56

# 3.0.7

> 2018-05-31

* **Feature**: Added support for `block` and `toggleComponentClass` on `Picker` ([#54])
* **Chore**: Update `shouldComponentUpdate` check in `<Table>` ([#53])
* **Chore**: Set max-width for some picker ([#51])
* **Bugfix**: Full Modal size not working ([#50])
* **Bugfix**: The event is not defined in the RadioGroup's onChange ([#49])
* **Bugfix**: The Click event Triggers 2 times when the checker is in the label ([#46])
* **Bugfix**: Events in the `Panel` header was blocked ([#45])

[#54]: https://github.com/rsuite/rsuite/pull/54
[#53]: https://github.com/rsuite/rsuite/pull/53
[#51]: https://github.com/rsuite/rsuite/pull/51
[#50]: https://github.com/rsuite/rsuite/pull/50
[#49]: https://github.com/rsuite/rsuite/pull/49
[#46]: https://github.com/rsuite/rsuite/pull/46
[#45]: https://github.com/rsuite/rsuite/pull/45

# 3.0.6

> 2018-05-24

* **Bugfix**: The `onSelect` event is not triggered after the enter key on `AutoComplete` ([#43])
* **Bugfix**: Omit the `style` and `className` on `DropdownMenu` of Picker ([#42])

[#43]: https://github.com/rsuite/rsuite/pull/43
[#42]: https://github.com/rsuite/rsuite/pull/42

# 3.0.5

> 2018-05-17

* **Bugfix**: Set all picker display inline-block ([#36])
* **Chore**: Create CODE_OF_CONDUCT.md ([#34])
* **Feature**: Support `onChangeCalendarDate` on `<DatePicker>` ([#33])
* **Chore**: Fix travis config for npm deployment ([#32])
* **Bugfix**: Remove redundant check `isNullOrUndefined` ([#31])
* **Bugfix**: Serious typos ([#30])
* **Bugfix**: `rsuite-schema` get precise length of a string ([#rsuite-schema-3])

[#36]: https://github.com/rsuite/rsuite/pull/36
[#34]: https://github.com/rsuite/rsuite/pull/34
[#33]: https://github.com/rsuite/rsuite/pull/33
[#32]: https://github.com/rsuite/rsuite/pull/32
[#31]: https://github.com/rsuite/rsuite/pull/31
[#30]: https://github.com/rsuite/rsuite/pull/30
[#rsuite-schema-3]: https://github.com/rsuite/rsuite-schema/pull/3

# 3.0.3

> 2018-05-10

* **Bugfix**: The error is thrown when children is false in `Container` ([#20])
* **Bugfix**: Dropdown placement not customizable in Nav ([#21])
* **Bugfix**: `tplTransform` return value mismatch when parameter is 0 ([#22])
* **Bugfix**: Form error message incomplete display in Modal ([#23])
* **Chore**: Update Babel configuration ([#24])
* **Bugfix**: Increase z-index for dropdown when modal opened ([#25])

[#20]: https://github.com/rsuite/rsuite/pull/20
[#21]: https://github.com/rsuite/rsuite/pull/21
[#22]: https://github.com/rsuite/rsuite/pull/22
[#23]: https://github.com/rsuite/rsuite/pull/23
[#24]: https://github.com/rsuite/rsuite/pull/24
[#25]: https://github.com/rsuite/rsuite/pull/25

# 3.0.2

> 2018-05-03

* **Bugfix**: `pageDate` not updated when value change for `Datepicker`.
* **Bugfix**: The scrolling operation throws an exception, when InputNumber `step` is a decimal.
* **Feature**: AutoComplete support {value,label} in data property.
* **Feature**: Added support for keydown events in AutoComplete.
* **Feature**: All picker added new property `menuClassName`.

# 3.0.1

> 2018-04-24

* **Bugfix**: styles directory not published to NPM

# 3.0.0

> 2018-04-24

* A brand new style.
* Support react 16+.
* Support Internationalization.
* Support flow, a Static Type Checker for JavaScript.
* Added prettier formatting.
* Update build to use `babel-preset-env`.
* Give up support for IE9.
* Breadcrumb New support `separator` property, custom separator.
* Modal `autoResizeHeight` attribute renamed to `overflow`.
* Update Button Group
  * Delete `shape` property, replace with `appearance` property, add support for `subtle` and `ghost` button.
  * Add property `color`, define button color.
  * Add property `loading`.
* Update Table
  * Integrate all `rsuite-table` functions.
  * Add support merged cells.
  * Add support text over long line wrap processing, you need to set the `wordWrap` property, default to flase.
* Update Checkbox, support `indeterminate` property.
* Update Dropdown
  * Delete the `activekey` and `select` properties, and use the `Selectpicker` component if you need to select a feature.
  * Add Support Multilevel Menu.
  * Add property placement` , set menu display location.
* Update Nav components, add `appearance` (`default`,`subtle`,`tabs`) property.
* Update Form related components
  * Integrates all `form-lib` and `rsuite-schema` functions.
  * Replaced the Field component with the `FormControl` component (default processing Input component, can be modified by `accepter` property).
  * Form `checktrigger` property value `null` to 'none'.
  * Support 3 kinds of layout layout: `horizontal`, `vertical`, `inline`.
  * Helpblock support `tooltip` property.
  * Add `ErrorMessage` component for displaying error messages.
* Integrate standalone component library into `rsuite` library
  * Add Uploader.
  * Add Tree.
  * Add CheckTree.
  * Add TreePicker.
  * Add CheckTreePicker.
  * Add SelectPicker.
  * Add CheckPicker.
  * Add Cascader.
  * Add AutoComplete.
  * Add DatePicker.
  * Add DateRangePicker.
  * Add Slider.
  * Add InputNumber.
  * Add Steps.
  * Add Timeline.
* New Components
  * Add Sidenav.
  * Added IconButton.
  * Add Icon, instead of IconFont component, while supporting SVG custom import icons.
  * Added Drawer.
  * Add Progress.
  * Add Alert.
  * Add Message.
  * Add Notification.
  * Add Loader.
