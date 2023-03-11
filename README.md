# Ecommerce

## Overview

One of the projects you will definitely have to work on, is creating an ecommerce website. In an ecommerce website, you will need to have a page to show all products, a page to show currently opened product, and a page to show the cart.

We will be using the API provided by this [API](https://fakestoreapi.com/) or this [API](https://fakeapi.platzi.com/) (Contains multiple **fake** images for the same product) You will focus mainly on the product API endpoint and you can check the website's documentation to find all the information you need to learn how to handle the pages.

### API Example:

```js
https://fakestoreapi.com/products
```

## Instructions

These are the instructions that you will need in order to complete the project.

### Pre-requisites

1. Add all the dependencies you need to use in your project. So you will need to add things like React router, reactstrap (see the [aesthetics](#aesthetics) section), or any other thing you will use using `npm i {package name}`. See the [recommendations](#recommendations) section for more information.
2. Put all the pages you need in the `src/routes` folder (Every page will need its own component). Put all the components inside the `src/components` folder and, ideally, if you have functions that you will be using in multiple places then you can put them in the `src/utils` folder and export them (You might need to read more about how to export functions from a file) and import them wherever you need them.

    ```text
    Folder structure

    public/
    src/
    ├─ routes/
    │  ├─ AllProducts.jsx
    ├─ components/
    │  ├─ Filter.jsx/
    ├─ util/
    │  ├─ API.js
    ├─ App.js
    ├─ index.js
    ├─ style.css
    ```

### Pages

You will need to create the following routes:

1. **All products** to show all products. This page should show all products and a filter that filters the products by name, price, category (you can get the list from the api),and rating.
2. **Product** page. Clicking on a product in **All products** page should show the selected product's information in this page. Remember nested routing will help you achieve this 😉. This page should have an add to cart button that will add this product to the cart. Use local storage to store the cart info (There are plenty of resources online on how to use it) or React Query. You will also need to include quantity as well.
3. **Cart** page should show all the products in the cart (again you can get it from the local storage or React Query if you used it). You will also need to have a button to remove a product from the cart. This page should also show the total payment.

### Project Management **(VERY IMPORTANT)**

All the tasks in the project should be put inside the issues tab in Github. The project should also use the [Git WorkFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), so you have to utilize different branches/task. This way it will reduce the amount of conflicts that could be faced.

This project could be the best, but if it lacks any form of project management then you won't learn anything. So get over your fears, if there are any, and work on your Git work skills. It will help you immensely in the long run.

This will also help you out when you apply to jobs because potential employers will look at this project and be able to surmise what you have done and the fact that you understand Git workflow as well.

**On presentation day we will ask you to show us your Github**

### Finalizing

After finishing the project, do the following:

1. Deploy the project on netlify so you can have a link to use it in your portfolio. Don't forget to add a link in your website that points to this project.
2. Remove everything from this README.md file and add the following content to it:
    1. A screenshot of the website.
    2. Your project's name.
    3. Description of the project.
    4. Tools used.
    5. Your names.

### Aesthetics

Styling everything on your from scratch will take a lot of time. However, there are some libraries that you can use to help you with styling.

#### Examples

1. [reactstrap](https://reactstrap.github.io/)
2. [Antd](https://ant.design/)
3. [chakra-ui](https://chakra-ui.com/)
4. [Material UI](https://mui.com/)
5. [tailwindcss](https://tailwindcss.com/)

There are a lot more than those, but these are the famous ones. Open them and check which ones seem easier for you and use them. Also, notice how I listed tailwindcss at the bottom. Thats because it doesn't come with ready components and you will need to develop things from scratch in some cases.

### Recommendations

You can use whatever tools you want as long as you finish the project; however, these are my recommendations:

- Use Next.js to build the website (This will really handle everything for you)
- Use React router for routing.
- Use React query for data handling. (This is going to make your life soooo easy if you decide to use plain React)
- Use Reactstrap or MUI for styling.
- Use EmotionJS/styled-components for styling

### Bonus

If you haven't finished the above parts, you can skip this part.

You can work on all or one of the following:

- `[Easy]` Add links to a navbar that contains all categories that lets the user immediately clicks on a category and it will show all the products in that category.
- `[Intermediate]` If you went with the platzi api (The second mentioned api above), try to add a slider that shows all images of the product in the product page.
- `[Difficult]` Add a checkout page that can use an already made form for the users to add their credite card info and validate them. Note: there are some online libraries that give you the ability to do this.

### Key takeaways 🎉

If you finish this project you can be absolutely sure that you can work on any project in the future. Generally, you will be able to use the same tools and techniques you used here to build any website in the future.

#### Things you will practice while working on this project

You will be able to practice:

- Dividing tasks as components between the team and avoiding most conflict issues.
- Using states and setters to change the state of the component.
- Using props to pass data from one component to another.
- Using useEffect to fetch and update information.
- Preparing folder structure in a way that makes your, and everyone elses work easier.
- Adding new dependencies and how to use them.
- Reading the documentation of the packages you use.
- Using routes to navigate between pages.
- Using local storage to store information.
- Using UI Kits to make styling components easier.

#### Concerns to avoid

The following thoughts are traps; steer away from them:

- *`This project is huge! I don't think I'm going to be able to do it.`* From your previous experiences, you know for a fact that everything starts big in the beginning but when you plan things and work on them they usually are not as big and scary as you thought.
- *`I don't know how to use [insert tool here] how am I going to deal with all of this?`* Again, don't worry. You have dealt with so many unknown things and just like you learned how to use them, you will be able to learn how to use any tool you want as long as you check its documentation.
- *`[Right from the beginning] How am I going to fix the bonus topic?`* DON'T GO THERE UNLESS YOU FINISH THE MAIN REQUIREMENTS FIRST!
- *`[After spending hours on an issue to fix it without reading the documentation or searching the issue on google] I will spend extra hours on this until I fix it`* This is a trap. You should always read the documentation and search for the solution.
- *`I'm so tired now!!!😩 I've been trying to fix this bug for 3 hours!!!`* In times like these, consider steping away from your computer and doing something else like playing with your pet, watching something funny, looking outside your window and enjoying cool air.

#### Confidence boosters

In times of doubts remember these:

- *`This project will be a huge addition to my already big list of projects that will increase my future prospects of getting hired`*
- *`The internet is FULL of resources that any one can use to learn about anything.`*
- *`I've worked on 3 projects. They seemed difficult in the beginning but I still aced them. I'm awesome!`*
- *`3 months ago, my biggest issues and worries are how to write the correct class name to change an HTML element's color. Now, I'm dealing with bigger things because I've learned so much more. My current worries and issues will be my HTML and CSS of my future.`*
- *`I'm not alone on this team. There are 2 more people who got my back.`*

### Example of a working project

This website is a working example of a project that you can use to learn how to create an ecommerce website. Note that you won't to add everything in this website. So, you won't add reviews for example. https://github.com/iammelvink/react-complete-e-commerce
