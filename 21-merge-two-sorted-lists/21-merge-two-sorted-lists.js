/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const Dummy = new ListNode(-Infinity);
    let prev = Dummy;
    
    while(list1 && list2){
        if(list1.val < list2.val){
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        }else{
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }
    
    if(!list1) prev.next = list2;
    if(!list2) prev.next = list1;

    
    return Dummy.next
};

// Solution #1 Arrays.

//     let result = [];
//     let i = 0;
//     let j = 0;
    
//     while(i < list1.length && j < list2.length){
//         if(list1[i] < list2[j]){
//             result.push(list1[i]);
//             i++;
//         }else{
//             result.push(list2[j]);
//             j++;
//         }
//     }
    
//     while(i < list1.length){
//         result.push(list1[i]);
//         i++;
//     }
    
//     while(j < list2.length){
//         result.push(list2[j]);
//         j++;
//     }
    
//     return result

// Solution #2 Arrays.

// const result = [ ...list1, ...list2]
// return result.sort();