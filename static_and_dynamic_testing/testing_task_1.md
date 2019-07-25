### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
    if card.value = 1 #missing =, should be ==
      return true
    else
      return false
    end #can just be "return card.value == 1" (returns true or false)
  end

  dif highest_card(card1 card2) #dif should be spelt def, comma missing between card1 and card2
  if card1.value > card2.value #if to 2nd end should be indented
    return card #should be card1
  else
    return card2
  end
end
end #ends class too early, should be after self.cards_total

def self.cards_total(cards) #doesn't need 'self.'
  total #should be total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total #return goes after the end of 'for' statement
  end
end
```
