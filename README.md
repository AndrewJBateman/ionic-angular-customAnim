# :zap: Ionic Angular Custom Animations

* App created using the [Ionic 5 framework](https://ionicframework.com/docs) to create custom animations. Another great tutorial from Simon Grimm at the [Ionic Academy](https://ionicacademy.com).

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Custom Animations](#zap-ionic-angular-custom-animations)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Creates custom animation of block moving horizontally across the screen
* Creates second page with custom navigation using animated transition
* updated to use latest Ionic 5 animation methods

## :camera: Screenshots

![image](./img/anim.png)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Angular v10](https://angular.io/)
* [Ionic/angular v5](https://www.npmjs.com/package/@ionic/angular)
* [Ionic Animations](https://ionicframework.com/docs/utilities/animations)

## :floppy_disk: Setup

* To start the server on _localhost://8100_ type: 'ionic serve -o'

## :computer: Code Examples

* animation of nav forward direction:

```typescript
if (opts.direction === 'forward') {
  return animationCtrl
  .create()
  .addElement(opts.enteringEl)
  .duration(DURATION)
  .easing('ease-in')
  .fromTo('opacity', 0, 1);
}
```

## :cool: Features

* Animation parameters such as opacity, ease-in & ease-out times, duration, etc. can be customised. See Ionic website and Github links in 'Inspiration' below.

## :clipboard: Status & To-do list

* Status: Working
* To-do: nothing

## :clap: Inspiration

* Project inspired by [Simon Grimm´s Youtube video: Ionic 5 Animations Controller & Custom Page Transitions](https://www.youtube.com/watch?v=12myW2oJHU4&t=57s)
* [Ionic Animations documentation](https://ionicframework.com/docs/utilities/animations)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
