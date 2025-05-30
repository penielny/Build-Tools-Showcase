# Code Report

## Eslint Report

### styles.scss

- warnings

- issues: ```@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');```

- fix: ```@import 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap';```

### main.ts

- warnings
- issues: ```  mainElement!.innerHTML = ``;```
fix: ```  mainElement!.innerHTML = '';```
and similar accross the files.

## prettier Report
### main.ts

- errors
- issues: removing unnecessary line breaks and spaces.
- fix: removing unnecessary line breaks and spaces.












