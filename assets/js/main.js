var app = new Vue(
  {
    el: '#root',
    data: {
      i: 0,
      arrayImage: [
        'https://www.nbareligion.com/wp-content/uploads/2019/04/After_breaking_Michael_Jordan_s_record_LeBron_James_is_out_to_tie_Kobe_Bryant_in_the_all-time_charts-e1554797972483.jpg',
        'https://www.milanpress.it/wp-content/uploads/2020/04/Screenshot_2020-04-22-kaka-milan-Ricerca-Google.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png',
        'https://www.ecodelcinema.com/wp-content/uploads/2020/11/Breaking-Bad.jpg',
      ]
    },
    methods: {
      next: function() {
        if (this.i < this.arrayImage.length - 1) {
          this.i++;
        } else{
          this.i = 0;
        }
      },

      prev: function() {
        if (this.i > 0) {
          this.i--;
        } else {
          this.i = this.arrayImage.length - 1;
        }
      }
    }
  }
);
