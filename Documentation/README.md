# Documentation
Last Updated: December 3, 2020

---
Documented By: 
- Rifas - [RifasM](https://github.com/RifasM)
- Sristi - [Artistic-cat](https://github.com/Artistic-cat)
- Vidhi - [vids014](https://github.com/vids014)

---

#### Screen Flow:
1. Login Page and Reset Password Page
   - Folder: Views/Login
   - View: Login, Reset
   - Components: None 
2. Home Page
   - Folder: Views/Home
   - View: Home
   - Components: Header, Footer, Sidebar
3. About Page:
   - Folder: Views/About
   - View: About
   - Components: Header, Footer, Sidebar
3. Set up Page
   - Folder: Views/Setup
   - View: Setup
   - Components: Header, Footer, Sidebar, NavTab/FuncNavTab 
4. Drop Box Page
    - View: FileUpload
    - Components: Header, Footer, Sidebar, FileDropBox
5. Nomenclature of Insurer Master
6. Status of Master Setup
   - Folder: Views/StatusOfMasterSetup
   - View: StatusOfMasterSetup
      - Master Mapping Screens
      - Folder: Views/StatusOfMasterSetup/GiiXMapping
      - View: GiiXMapping
         - Preview Mapped Entries
         - Folder: Views/StatusOfMasterSetup/GiiXMapping
         - View: PreviewMappedEntries

         - Automatic Mapping
         - Folder: Views/StatusOfMasterSetup/GiiXMapping
         - View: AutomaticMapping
      - Insurer Definition
      - Folder: Views/StatusOfMasterSetup/InsurerDefinition
      - View: InsurerDefinition
7. Define API Sequence
   - Folder: Views/DefineAPISequence
   - View: InsurerAPISequence
8. Mapping of Insurer API Files
   - Folder: Views/DefineAPISequence
   - View: MappingOfInsurerAPIFiles
9. Status of API Setup
   - Folder: Views/DefineAPISequence
   - View: StatusOfAPISetup
      - Entity Mapping of Insurer API Files
      - Folder: Views/DefineAPISequence/StatusOfApiSetup
      - View: MappingOfInsurerAPIFiles
         - Preview Mapped Entries
         - Folder: Views/DefineAPISequence/StatusOfApiSetup
         - View: PreviewMappedEntries

         - Automatic Mapping
         - Folder: Views/DefineAPISequence/StatusOfApiSetup
         - View: AutomaticMapping
# For drafts on every page... send last url and update draft name till saved. 
# Keep a draft API maybe that looks like
<!-- draft {
   data: [
      {
         last-location: "url of where save draft was called"
         previous pages data page wise or code numbers for which API it's saved in and where
      }
   ]
} -->