# Points Counter

I got this idea today when I woke up at 10 which is pretty late as to my schedule. I thought about the reason for my being late and concluded that I was late because I didn't have anything to wake up to. I am still having my summer vacation so I am naturally being lazy, to stop this I attached a small whiteboard next to my monitor and decided I will write the tasks I would be doing tomorrow on the board the night before so that I would have some tasks to wake up to. But this alone will not help me if I don't have something valuable in the end, so I made this little program. The idea is that I will wake up and look at all the tasks I have to do today and at the end of the day if I can complete all the tasks I would press the successful button and if I am not able to do so I would press the unsuccessful button. This just adds a little prize factor to the whole thing. I learned this from the ["Super Mario Effect" by Mark Rober.](https://www.youtube.com/watch?v=9vJRopau0g0) So Points Counter is a simple web application built with HTML, CSS, and JavaScript that allows you to keep track of points. You can increase the points by clicking the "Successful" button or decrease them by clicking the "Unsuccessful" button. The points are stored in the browser's local storage, so even if you reload the page, the points will remain the same. This is not a bug, it's a feature because I don't want my friends to ruin my daily score. The whole agenda behind this is to see how far I could go.

![Points Counter Screenshot](https://i.imgur.com/RPcMX6L.png)

## Getting Started

To run the program locally, follow these steps:

1.  Clone the repository or download the ZIP file.
    
2.  Navigate to the project directory.
    
3.  Open the `index.html` file in your web browser.
    

## Usage

Once you have the program running in your browser, you will see the following elements:

-   Points: The current points value is displayed in the center of the page.
    
-   Successful Button: Clicking this button will add 5 points to the current value.
    
-   Unsuccessful Button: Clicking this button will subtract 5 points from the current value.
    

The points value is automatically updated on the page when you click either of the buttons.

## Persistence

The points are stored in the browser's local storage, allowing them to persist even when you reload the page or close the browser. This means that if you modify the points value and then reopen the application, the previous value will be retrieved from local storage.

## Customization

You can customize the styles of the application by modifying the `styles.css` file. Feel free to experiment with different colors, font sizes, and layouts to suit your preferences.

## Limitations

Please note the following limitations of the current implementation:

-   The points are stored in the browser's local storage, which means they are specific to the device and browser you are using. If you switch to a different device or browser, the points will not be synchronized.
    
-   The points are stored as a single value in local storage and are not associated with any user accounts or sessions. If multiple users access the application on the same device, they will see and modify the same points value.
    

## Contributing

Contributions to improve the program or add new features are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/cdkw2/points-counter/blob/main/LICENSE). Feel free to use, modify, and distribute the code as you see fit.

## Future Plan(s)

- Add a line graph to track progress
