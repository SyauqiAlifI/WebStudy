$('#toggle-sidebar').click(function () {
  $('#sidebar').toggleClass('active-sidebar');
  $('#main-content').toggleClass('active-main-content');
});

// Dashboard
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Kotlin', 'Dart', 'HTML', 'CSS', 'JS', 'Python'],
    datasets: [{
      label: 'skills in 2022',
      data: [18, 11, 19, 19, 15, 17],
      backgroundColor: [
        'rgba(176, 0, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 94, 0, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 228, 0, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(176, 0, 255, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 94, 0, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 228, 0, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Kotlin', 'Dart', 'HTML', 'CSS', 'JS', 'Python'],
    datasets: [{
      label: 'skills in 2022',
      data: [18, 11, 19, 19, 15, 17],
      backgroundColor: [
        'rgba(176, 0, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 94, 0, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 228, 0, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(176, 0, 255, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 94, 0, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 228, 0, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
$(document).ready(function () {
  new Typed('#auto-type', {
    strings: ['a Web Developer^3000', 'an Android Developer^3000',
      'a Python Programmer^3000'
    ],
    typeSpeed: 50,
    loop: true
  });
});