


//���ÿ������ʱ���滻��ռλ�õ�ͼƬ


function showPic(whichpic){
   //���ң�Ҫʲô���������ô�õ�

   //1.��ȡͼƬ�洢·��
	 //���洢�����ӵ�href������
   var source = whichpic.getAttribute("href");

   //2.�滻ͼƬ
		//�ҵ����滻��ͼƬ
		//�޸�����src����
   var placeholder = document.getElementById("placeholder");
   placeholder.setAttribute("src",source);
   //��placeholder.src = source;�ȼۣ����������setAttribute("","");
      
}

//����ÿ������ʱ���滻��ռλ�õ�ͼƬ������ֹ���ӱ�����ʱ��Ĭ����Ϊ
	//������onclick�¼�
	//ÿ�����ӣ�����
	//�滻�����ú���
	//��ֹ���ӱ�����ʱ��Ĭ����Ϊ return false,��װ����δ������

//������ʱ������ͼƬ�滻����