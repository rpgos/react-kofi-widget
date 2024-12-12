# kofi-react-widget

React floating button component to accept donations to your Ko-fi account without leaving your app. Works on both Next.js and pure React apps.
Check below for examples.


## Usage

    import { KofiFloatingButton } from "kofi-react-widget";
    
    export default YourComponent() {
        ...
        return (
        ...
        <KofiFloatingButton username="rodribuilds" background="#fbbf24" textColor="#323842" text="Coffee?" />
        )
    }
    
### Props

| Name          |                 Description        |     Type      |   Mandatory   | Default
| ------------- |------------------------------------| ------------- | ------------- | --------
| username      |Your Ko-fi username                 |     string    |     true      | ---
| background    |Button background color (HEX value) |     string    |    false      | #00b9fe
| textColor     |Button text color (HEX value)       |     string    |    false.     | #FFF

## Examples

![alt text](<Screenshot 2024-12-12 at 17.16.05.png>)
![alt text](<Screenshot 2024-12-12 at 17.51.26.png>)
![alt text](<Screenshot 2024-12-12 at 17.57.53.png>)

![alt text](<Screenshot 2024-12-12 at 17.16.21.png>)
