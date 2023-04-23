<?php
class Node {
    private $data;
    private $next;
    public function __construct($data){
        $this->set_data($data);
        $this->set_next(null);
    }
    
    public function set_data($data){
        $this->data = $data;
    }
    
    public function get_data(){
        return $this->data;
    }
    
    public function set_next($next){
        $this->next = $next;
    }
    
    public function get_next(){
        return $this->next; 
    }
}

class Stack{
    private $head;
    public function __construct(){
        $this->set_head(null);
    }
    
    public function set_head($node){
         $this->head = $node;
    }
    
    public function get_head(){
        return $this->head;
    }
    
    public function isEmpty(){
        return $this->head == null;
    }
    
    public function push($data){
        $newNode = new Node($data);
        if($this->isEmpty()){
            $this->set_head($newNode);
        } else{
            $newNode->set_next($this->get_head());
            $this->set_head($newNode);
        }
    }
    
    public function pop(){
        if(!$this->isEmpty()){
            $pop = $this->get_head();
            $this->set_head($pop->get_next());
            return $pop->get_data();
        }
    }
    
    public function peek($number){
        if($this->isEmpty()){
            echo "Empty Stack!";
        }
        $tmp = $this->get_head();
        $i = 0;
        $returnStr = "";
        while($i < $number && $tmp){
            $returnStr .= $tmp->get_data();
            if($i != $number - 1){
                $returnStr .= " -> ";
            }
            $tmp = $tmp->get_next();
            $i++;
        }
        echo $returnStr;
    }
}

$stack = new Stack();
$stack->push(1234);
$stack->push(5678);
$stack->push("xyz");
$pop = $stack->pop();
//print_r ($pop);
$stack->push("abc");
// print_r ($stack->get_head());
$stack->peek(3);
?>