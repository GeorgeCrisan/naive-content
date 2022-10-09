

# Used to retrieve the text content from a given webpage

</br>

## Usage

</br>


```
    yarn install 
```

then

```
    yarn run-naive
```

 </br>

Then follow the instructions from the prompt.

## Prompt Options

</br>
Required. The URL for the content you want to retrieve.

```
prompt: URL. Without http:// or https://:  <-- Enter the url for the webpage -->
```

</br>
Optional. The results are saved in "./results/" directory which is created in the root of the project.

```
prompt: File name: The name and the extension. Default results.md:  <-- Set a custom filename and extension for the file with results. -->
```

</br>
Optional. A custom delay for pages which have dynamic content. For example pages built in React SPA or similar technology.

```
prompt: Optional. A delay in ms to allow the page to load content. For example 2000 is 2 seconds.:  <-- Custom delay -->
```

</br>
Required. An option to retrieve the data in background or by running an actual browser.
Some website are clever enough to detect whether a resource is requested by an actual browser.
This is a case when the headless being turned off is useful.

```
prompt: Headless mode: Type "y" for yes or "n" for no.:  n
```

### Info
To skip an Optional prompt press enter.