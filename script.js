function key1()
{document.calc.result.value +="1";}
function key2()
{document.calc.result.value +="2";}
function key3()
{document.calc.result.value +="3";}
function keyplus()
{document.calc.result.value +="+";}
function key4()
{document.calc.result.value +="4";}
function key5()
{document.calc.result.value +="5";}
function key6()
{document.calc.result.value +="6";}
function keyminus()
{document.calc.result.value +="-";}
function key7()
{document.calc.result.value +="7";}
function key8()
{document.calc.result.value +="8";}
function key9()
{document.calc.result.value +="9";}
function keymulti()
{document.calc.result.value +="*";}
function keyclear()
{document.calc.result.value ="";}
function keyzero()
{document.calc.result.value +="0";}
function keyeval()
{
	var keyeval=eval(document.calc.result.value)
	document.calc.result.value=keyeval;

}
function keydiv()
{document.calc.result.value +="/";}
