

//�Ѻ������󶨵������¼���������
function addLoadEvent(func){
	//��ȡ���еļ���ʱ�亯����ֵ
	var oldload = window.onnload;

	//����¼���û�󶨺�������ֱ�ӰѺ�����ӵ�����ʱ����
	if(typeof oldload != "function"){
		window.onload = func;
	}
	// ��������¼��ϣ��Ѿ��󶨺��������º�����׷���ں���
	else {
		//����һ�����������������ɶ������
		window.onload = function(){
		oldload();
		func();
		}
	}
}