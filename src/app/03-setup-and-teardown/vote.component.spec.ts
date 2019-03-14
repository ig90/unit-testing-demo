import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Arrange
 // let component = new VoteComponent();
  let component: VoteComponent;

  beforeEach(() => {
      component = new VoteComponent();
  });
  it('should increment totalVotes when upVote', () => {
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downVote', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
