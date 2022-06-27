
class TestimonialsObject {
    constructor(name, danceClassName, testimony, date, rating, wasStudent) {
        this.name = name;
        this.danceClassName = danceClassName;
        this.testimony = testimony;
        this.date = date;
        this.rating = rating;
        this.wasStudent = wasStudent;
    }
  }

  const student1 = new TestimonialsObject('Evelyn', 'k2', 'I love the class, it is so much fun!', '11/12/21', 5, true);
  const student2 = new TestimonialsObject('Bodi', 'k1', 'Dance is the best. Miss Nicole is my favorite.', '22/01/21', 5, true);
  const parent1 = new TestimonialsObject('Derek', 'k2', 'My wife is the best teacher. She knows how to control the class while making it fun for the kids. She truly knows what she is doing and I highly recommend taking a class from her for kids.', '2/22/22', 5, false);
  const parent2 = new TestimonialsObject('Lex', 'k3', 'Nicole is the best teacher. She knows how to control the class while making it fun for the kids. She truly knows what she is doing and I highly recommend taking a class from her for kids.', '2/22/22', 5, false);
  const parent3 = new TestimonialsObject('Sunan', 'k2', 'Wowza! This is great', '2/22/22', 5, false);

  const danceClasses = [student1, student2, parent1, parent2, parent3];

  export default danceClasses;