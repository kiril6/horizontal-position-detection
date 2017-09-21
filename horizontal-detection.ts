  private scrollInterval;
  
  ngAfterViewInit() {                                     //is detecting the element with interval until found, which has an id in the scroll element
    this.scrollInterval = setInterval(() => {
      if (document.getElementById('matchesScroll')) {
        if (document.getElementById('selItem')) {
          this.selectedItemScroll();
          clearInterval(this.scrollInterval);
        }
      }
    }, 200);
  }

  selectedItemScroll() {                                   //runs the method after view established and scrolls to the position of selected element
    var el: any = document.getElementById('matchesScroll');
    var el2: any = document.getElementById('selItem');
    if (el) {
      var xPos = el2.offsetLeft;
      el.scrollLeft = xPos - 10;
    }
  }

  sport(event) {                                          //this is triggered by (click)="sport($event)" in the html file to reposition the selected element in the scroll element more better
    var el: any = document.getElementById('matchesScroll');
    var target = event.target || event.srcElement || event.currentTarget;
    var xPos = target.offsetLeft;
    el.scrollLeft = xPos - 10;
  }
  
  ngOnDestroy() {                                          //destroys the interval when element found
    clearInterval(this.scrollInterval);
  }