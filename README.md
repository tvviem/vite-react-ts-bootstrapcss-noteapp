# Notes App using react
## Technology:
- react/ts
- react-router-dom
- UI
  - bootstrap: `react-bootstrap`
  - `react-select` library for tags
- react hooks:
  - useRef: link ref attribute in NoteForm.tsx
  - useState, useEffect to manage state of Notes in useLocalStorage function
  - useMemo: convert rawNotes into actualNotes 
  - useParams
  - useOutletContext
- function for manage datanotes: useLocalStorage function
- using uuidv4 from  `pn add @types/uuid -D` && `pn add uuid`
  - `import { v4 as uuidv4 } from 'uuid';`