require("pry")
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame

  def initialize (cards)
    @cards = cards
  end

  def card_count()
    return @cards.count()
  end

  def check_for_ace(card)
    return card.value == 1
  end

  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1
    else
      return card2
    end
  end

  def cards_total()
    total = 0
    for card in @cards
      # binding.pry
      total += card.value
    end
    return "You have a total of #{total}" #changed format
  end
end
