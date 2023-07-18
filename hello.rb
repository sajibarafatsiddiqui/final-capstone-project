# frozen_string_literal: true

def diff_ways_to_compute(expression)
  results = []
  return [expression.to_i] if expression.match?(/^\d+$/)

  operators = ['+', '-', '*', '/']
  operands = expression.split(%r{[+\-*/]})
  operands.each_index do |index|
    next_operand = operands[index + 1]
    next if next_operand.nil?

    operators.each do |operator|
      sub_expression = "#{operands[index]}#{operator}#{next_operand}"
      remaining_expression = expression.sub(sub_expression, '')
      sub_results = diff_ways_to_compute(remaining_expression)

      sub_results.each do |sub_result|
        case operator
        when '+'
          results << sub_result + eval(sub_expression)
        when '-'
          results << sub_result - eval(sub_expression)
        when '*'
          results << sub_result * eval(sub_expression)
        when '/'
          results << sub_result / eval(sub_expression)
        end
      end
    end
  end
  results.uniq
end
expression = '1-2-2'
results = diff_ways_to_compute(expression)
puts results.inspect
