# kofi-react-widget

React floating button component to accept donations to your Ko-fi account without leaving your app. Works on both Next.js and pure React apps, but check out how to use it below because, for now, it's a bit different for each of them.
Check below for examples.


## Usage

### In a Nextjs app

Import the component from `kofi-react-widget/next`

    import { KofiFloatingButton } from "kofi-react-widget/next";
    
    export default YourComponent() {
        ...
        return (
        ...
        <KofiFloatingButton username="rodribuilds" background="#fbbf24" textColor="#323842" text="Coffee?" />
        )
    }

### In a React app

Import the component from `kofi-react-widget/react`

    import { KofiFloatingButton } from "kofi-react-widget/react";

    ...

    function App() {
        <KofiFloatingButton username="rodribuilds" background="#fbbf24" textColor="#323842" text="Coffee?" />
        ...
    }

    
### Props

| Name          |                 Description        |     Type      |   Required    | Default
| ------------- |------------------------------------| ------------- | ------------- | --------
| username      |Your Ko-fi username                 |     string    |     true      | ---
| text          |Button text                         |     string    |    false      | 
| background    |Button background color (HEX value) |     string    |    false      | #00b9fe
| textColor     |Button text color (HEX value)       |     string    |    false.     | #FFF

## Examples

You can see a working example [here](https://kinggizzardlastrelease.vercel.app/).

![](screenshots/blue.png)
![](screenshots/yellow.png)
![](screenshots/bluenotext.png)

![](screenshots/fullwidget.png)
