
</br>

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

</br>

## Prompt Options

</br>

URL. Required. The URL for the content you want to retrieve. The url will be appended with https automatically if not already present.

</br>

```
prompt: URL:  georgecrisan.com
```

</br>

Optional. The results are saved in "./results/" directory which is created in the root of the project.

</br>


```
prompt: Optional file name. The name and the extension. Default results.md:  results-custom.md
```

</br>
Optional. A custom delay for pages which have dynamic content. For example pages built in React SPA or similar technology.

```
prompt: Optional delay. Delay in ms to allow the page to load content. For example 2000 is 2 seconds:  300
```

</br>
Required. An option to retrieve the data in background or by running an actual browser.
Some website are clever enough to detect whether a resource is requested by an actual browser.
This is a case when the headless being turned off is useful.

``` 
prompt: Headless mode: Type "y" for yes or "n" for no:  y
```

### Info
To skip an Optional prompt press enter.

``` 
prompt: URL:  georgecrisan.com
prompt: Optional file name. The name and the extension. Default results.md:  result-geo.md
prompt: Optional delay. Delay in ms to allow the page to load content. For example 2000 is 2 seconds:  
prompt: Headless mode: Type "y" for yes or "n" for no:  y
Attempting to navigate:  https://georgecrisan.com
Headless mode. Start scaping with:  {
  url: 'georgecrisan.com',
  fileName: 'result-geo.md',
  delay: '',
  headless: 'y'
}
Content saved to:  ./results/result-geo.md
✨  Done in 23.08s.
```